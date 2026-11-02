import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const read = (name) => readFile(join(root, name), 'utf8');
const pkg = JSON.parse(await read('package.json'));

test('package manifest describes a DSH web bundle', () => {
  assert.equal(pkg.name, 'dsh-prism-themes');
  assert.match(pkg.version, /^\d+\.\d+\.\d+$/);
  assert.equal(pkg.type, 'module');
  assert.equal(pkg.license, 'MIT');
  assert.equal(pkg.publishConfig.access, 'public');
  assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(pkg.dsh.client.platform, 'web');
  assert.equal(pkg.dsh.client.immediately, true);
  assert.equal(pkg.exports['.'], './index.js');
  assert.equal(pkg.exports['./client'], './client.js');
  assert.equal(pkg.exports['./icon'], './icon.svg');
  assert.ok(pkg.dsh.client.inject.includes('@deepseek-ai/dsh-client-ui-theme'));
  assert.ok(pkg.dsh.client.inject.includes('@deepseek-ai/dsh-client-ui-settings'));
  assert.ok(pkg.files.includes('client.js'));
  assert.ok(pkg.files.includes('cordis.patch.yml'));
  assert.ok(pkg.files.includes('icon.svg'));
  assert.ok(pkg.files.includes('locale/*.json'));
  assert.equal(pkg.dependencies, undefined, 'the client module is self-contained');
});

test('bundle patch inserts the package row', async () => {
  const patch = await read('cordis.patch.yml');
  assert.match(patch, /- insert:/);
  assert.match(patch, /id: dsh-prism-themes/);
  assert.match(patch, /name: dsh-prism-themes/);
});

test('display metadata and icon are present for both locales', async () => {
  for (const locale of ['en', 'zh']) {
    const meta = JSON.parse(await read(`locale/${locale}.json`));
    assert.equal(typeof meta.meta.title, 'string');
    assert.equal(typeof meta.meta.description, 'string');
    assert.ok(meta.meta.title.length > 0);
    assert.ok(meta.meta.description.length > 0);
  }
  const icon = await read('icon.svg');
  assert.match(icon, /^<svg[\s\S]*<\/svg>\s*$/);
  assert.match(icon, /viewBox="0 0 64 64"/);
  assert.ok((await stat(join(root, 'icon.svg'))).size < 256 * 1024);
  assert.ok(pkg.icon);
});

test('client artifact registers the expected module id', async () => {
  const client = await read('client.js');
  assert.match(client, /window\.__ModuleLoader__\.load\(\{/);
  assert.match(client, /id: 'dsh-prism-themes'/);
  assert.match(client, /factory\(require\)/);
  assert.match(client, /settings\.section/);
  assert.match(client, /overrideTokens/);
  assert.match(client, /ctx\.locale\.register/);
});

test('all packaged paths exist', async () => {
  for (const entry of pkg.files) {
    if (entry.includes('*')) continue;
    await stat(join(root, entry));
  }
  for (const entry of ['README.md', 'CHANGELOG.md', 'LICENSE', '.github/workflows/ci.yml']) {
    await stat(join(root, entry));
  }
});
