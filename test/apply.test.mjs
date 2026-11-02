import test from 'node:test';
import assert from 'node:assert/strict';
import { loadPlugin, installMemoryStorage, createFakeTheme } from './harness.mjs';

const { module } = await loadPlugin();
const { createEngine, THEME_BY_ID, SOURCE, STORAGE_KEY } = module.__test;

function fakeContext(theme, records) {
  return {
    theme,
    effect(fn, label) {
      records.effects.push(label);
      const cleanup = fn();
      if (typeof cleanup === 'function') records.cleanups.push(cleanup);
      return () => {};
    },
    on(name, listener) {
      records.events.push({ name, listener });
      return () => {};
    },
    locale: {
      bind(namespace) {
        return (key) => namespace + ':' + key;
      },
      register(namespace, dictionaries) {
        records.locales.push({ namespace, dictionaries });
        return () => {};
      },
    },
    slots: {
      inject(key, callback) {
        records.injections.push(key);
        callback();
        return () => {};
      },
      register(options, component) {
        records.slots.push({ options, component });
        return () => {};
      },
    },
  };
}

test('createEngine applies a token layer, persists choice, and restores native', () => {
  installMemoryStorage();
  const theme = createFakeTheme({ preference: 'system', colorScheme: 'light' });
  const engine = createEngine(theme);
  engine.mount();

  const first = engine.getSnapshot();
  assert.ok(first.activeTheme);
  assert.equal(first.preference, 'system');
  assert.equal(theme.layers.length, 1);
  assert.equal(theme.layers[0].source, SOURCE);
  assert.ok(Object.keys(theme.layers[0].tokens).length >= 90);
  assert.equal(theme.layers[0].tokens['--dsw-alias-bg-base'].light, first.activeTheme.light.base);

  const themeId = first.themeId;
  const other = first.activeTheme.id === 'midnight-orchid' ? 'deepseek-daylight' : 'midnight-orchid';
  engine.setTheme(other);
  assert.equal(engine.getSnapshot().themeId, other);
  assert.equal(theme.layers.length, 2);
  assert.ok(theme.layers[0].disposed, 'the previous layer is replaced by the same source');
  assert.equal(theme.layers[1].source, SOURCE);
  assert.ok(theme.layers[1].tokens['--dsw-alias-brand-primary'].light.length > 0);

  engine.setCharacter('electric');
  assert.equal(engine.getSnapshot().character, 'electric');
  assert.equal(theme.layers.length, 3);

  engine.setAccent('#ff3366');
  assert.equal(engine.getSnapshot().accent, '#FF3366');
  assert.equal(theme.layers.length, 4);
  engine.clearAccent();
  assert.equal(engine.getSnapshot().accent, null);

  engine.toggleFavorite('midnight-orchid');
  assert.ok(engine.getSnapshot().favorites.includes('midnight-orchid'));
  engine.toggleFavorite('midnight-orchid');
  assert.ok(!engine.getSnapshot().favorites.includes('midnight-orchid'));

  engine.setTheme('native');
  assert.equal(engine.getSnapshot().themeId, 'native');
  assert.equal(engine.getSnapshot().activeTheme, null);
  assert.ok(theme.layers[theme.layers.length - 1].disposed, 'native disposes the active layer');

  const saved = JSON.parse(globalThis.localStorage.getItem(STORAGE_KEY));
  assert.equal(saved.themeId, 'native');

  engine.setTheme(themeId);
  assert.equal(engine.getSnapshot().themeId, themeId);
  engine.dispose();
  assert.ok(theme.layers[theme.layers.length - 1].disposed, 'dispose removes the final layer');
});

test('scheme control requests the built-in light/dark/system preference', () => {
  installMemoryStorage();
  const theme = createFakeTheme({ preference: 'system', colorScheme: 'light' });
  const engine = createEngine(theme);
  engine.mount();
  engine.setScheme('dark');
  engine.syncTheme();
  assert.equal(theme.state.preference, 'dark');
  assert.equal(theme.state.colorScheme, 'dark');
  assert.equal(engine.getSnapshot().activeScheme, 'dark');
  engine.setScheme('system');
  assert.equal(theme.state.preference, 'system');
  engine.setScheme('not-a-scheme');
  assert.equal(theme.state.preference, 'system');
  engine.dispose();
});

test('saved preferences survive a new engine and invalid values are ignored', () => {
  const storage = installMemoryStorage();
  const theme = createFakeTheme({ preference: 'system', colorScheme: 'light' });
  const first = createEngine(theme);
  first.mount();
  first.setTheme('green-room');
  first.setCharacter('calm');
  first.setAccent('#ffaa00');
  first.toggleFavorite('sea-glass');
  first.dispose();

  const second = createEngine(theme);
  second.mount();
  const restored = second.getSnapshot();
  assert.equal(restored.themeId, 'green-room');
  assert.equal(restored.character, 'calm');
  assert.equal(restored.accent, '#FFAA00');
  assert.ok(restored.favorites.includes('sea-glass'));
  second.dispose();

  storage.set('dsh-prism-themes:preferences:v1', JSON.stringify({
    themeId: 'not-a-theme',
    character: 'not-a-character',
    accent: 'red',
    favorites: ['not-a-theme', 'midnight-orchid'],
  }));
  const third = createEngine(theme);
  third.mount();
  const repaired = third.getSnapshot();
  assert.ok(THEME_BY_ID.has(repaired.themeId));
  assert.notEqual(repaired.themeId, 'not-a-theme');
  assert.equal(repaired.character, 'signature');
  assert.equal(repaired.accent, null);
  assert.deepEqual([...repaired.favorites], ['midnight-orchid']);
  third.dispose();
});

test('apply registers locale, a live override, and the settings page', () => {
  installMemoryStorage();
  const theme = createFakeTheme({ preference: 'system', colorScheme: 'light' });
  const records = { effects: [], cleanups: [], events: [], locales: [], injections: [], slots: [] };
  const ctx = fakeContext(theme, records);

  module.apply(ctx);

  assert.ok(theme.layers.length >= 1);
  assert.equal(theme.layers[0].source, SOURCE);
  assert.ok(records.locales.some((entry) => entry.namespace === 'prism-themes'));
  assert.ok(records.events.some((entry) => entry.name === 'theme/change'));
  assert.ok(records.injections.includes('settings.section'));
  const page = records.slots.find((entry) => entry.options.name === 'settings.section');
  assert.ok(page);
  assert.equal(page.options.id, 'dsh-prism-themes');
  assert.equal(page.options.locale, 'prism-themes');
  assert.equal(typeof page.options.label, 'function');
  assert.equal(page.options.label(), 'prism-themes:nav.label');
  assert.equal(typeof page.component, 'function');

  for (const cleanup of records.cleanups) cleanup();
});
