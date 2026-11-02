import test from 'node:test';
import assert from 'node:assert/strict';
import { loadPlugin } from './harness.mjs';

const { module } = await loadPlugin();
const {
  THEMES,
  THEME_BY_ID,
  FAMILIES,
  CHARACTERS,
  buildThemeTokens,
  buildMode,
  contrastRatio,
  normalizeHex,
  characterAccent,
  EN,
  ZH,
} = module.__test;

const MODES = ['light', 'dark'];
const SEED_KEYS = [
  'base', 'surface', 'surfaceAlt', 'overlay', 'border', 'text', 'muted',
  'accent', 'accentInk', 'sidebar', 'success', 'warning', 'danger',
];
const REQUIRED_IDS = [
  'deepseek-daylight', 'deepseek-abyss', 'cobalt-ink', 'blue-hour',
  'midnight-orchid', 'obsidian-ember', 'ember-noir', 'cyber-tide',
  'sea-glass', 'green-room', 'moss-clay', 'frost-garden',
  'terminal-amber', 'newsprint', 'arcade-neon', 'vaporwave',
  'graphite', 'porcelain', 'saffron-paper', 'terracotta-sun',
  'bubblegum', 'mango-tango', 'lavender-haze', 'citrus-pop',
];
const FAMILY_IDS = ['signature', 'nocturne', 'botanical', 'nostalgia', 'minimal', 'playful'];

test('catalog contains 24 unique themes, four per family', () => {
  assert.equal(THEMES.length, 24);
  assert.equal(THEME_BY_ID.size, 24);
  for (const id of REQUIRED_IDS) assert.ok(THEME_BY_ID.has(id), 'missing required theme ' + id);
  for (const family of FAMILY_IDS) {
    assert.equal(THEMES.filter((theme) => theme.family === family).length, 4, 'family ' + family);
  }
  for (const theme of THEMES) {
    assert.match(theme.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(theme.name.length > 0 && theme.name.length <= 40);
    assert.ok(theme.tagline.length > 0 && theme.tagline.length <= 80);
    assert.ok(FAMILIES.some((entry) => entry.id === theme.family));
  }
  assert.deepEqual(FAMILIES.map((entry) => entry.id), ['all', ...FAMILY_IDS]);
});

test('every theme exposes complete thirteen-seed light and dark palettes', () => {
  for (const theme of THEMES) {
    for (const mode of MODES) {
      const palette = theme[mode];
      for (const key of SEED_KEYS) {
        assert.equal(normalizeHex(palette[key]), palette[key].toUpperCase(), theme.id + ' ' + mode + ' ' + key);
      }
    }
  }
});

test('all palettes meet the readability floors', () => {
  for (const theme of THEMES) {
    for (const mode of MODES) {
      const p = theme[mode];
      const where = theme.id + ' ' + mode;
      assert.ok(contrastRatio(p.text, p.base) >= 7, where + ' text/base');
      assert.ok(contrastRatio(p.text, p.surface) >= 7, where + ' text/surface');
      assert.ok(contrastRatio(p.muted, p.base) >= 4.5, where + ' muted/base');
      assert.ok(contrastRatio(p.muted, p.surface) >= 4.5, where + ' muted/surface');
      assert.ok(contrastRatio(p.accent, p.base) >= 3, where + ' accent/base');
      assert.ok(contrastRatio(p.accent, p.surface) >= 3, where + ' accent/surface');
      assert.ok(contrastRatio(p.accentInk, p.accent) >= 4.5, where + ' ink/accent');
      for (const state of ['success', 'warning', 'danger']) {
        assert.ok(contrastRatio(p[state], p.base) >= 3, where + ' ' + state + '/base');
      }
      assert.ok(contrastRatio(p.border, p.base) >= 1.15, where + ' border visibility');
      assert.ok(contrastRatio(p.border, p.base) < 3.0, where + ' border subtlety');
    }
  }
});

test('theme expansion covers the Host alias surface with paired values', () => {
  for (const theme of THEMES) {
    for (const character of CHARACTERS) {
      const tokens = buildThemeTokens(theme, character, null);
      const names = Object.keys(tokens);
      assert.ok(names.length >= 90, theme.id + ' token count ' + names.length);
      for (const name of names) {
        assert.match(name, /^--dsw-/);
        const pair = tokens[name];
        assert.equal(typeof pair.light, 'string', name + ' light');
        assert.equal(typeof pair.dark, 'string', name + ' dark');
        assert.ok(pair.light.length > 0 && pair.dark.length > 0);
        for (const value of [pair.light, pair.dark]) {
          assert.match(value, /^(?:#[0-9A-Fa-f]{6}|rgba\(\d{1,3}, \d{1,3}, \d{1,3}, (?:0|1|0?\.\d+)\)|transparent)$/, name + ' css value ' + value);
        }
      }
      assert.ok(tokens['--dsw-alias-prism-accent']);
      assert.equal(tokens['--dsw-alias-bg-base'].light, theme.light.base);
      assert.equal(tokens['--dsw-alias-bg-base'].dark, theme.dark.base);
      assert.equal(tokens['--dsw-alias-label-primary'].light, theme.light.text);
      assert.equal(tokens['--dsw-alias-label-primary'].dark, theme.dark.text);
      assert.ok(contrastRatio(tokens['--dsw-alias-state-error-primary'].light, theme.light.base) >= 4.5);
      assert.ok(contrastRatio(tokens['--dsw-alias-state-error-primary'].dark, theme.dark.surface) >= 4.5);
      assert.ok(contrastRatio(tokens['--dsw-alias-state-success-primary'].light, theme.light.surface) >= 4.5);
      assert.ok(contrastRatio(tokens['--dsw-alias-state-success-primary'].dark, theme.dark.base) >= 4.5);
    }
  }
});

test('character and accent overrides stay legible', () => {
  const theme = THEME_BY_ID.get('midnight-orchid');
  const calm = buildThemeTokens(theme, 'calm', null);
  const signature = buildThemeTokens(theme, 'signature', null);
  const electric = buildThemeTokens(theme, 'electric', null);
  assert.notEqual(calm['--dsw-alias-brand-primary'].light, signature['--dsw-alias-brand-primary'].light);
  assert.notEqual(electric['--dsw-alias-brand-primary'].light, signature['--dsw-alias-brand-primary'].light);

  for (const mode of MODES) {
    const seed = theme[mode];
    for (const character of CHARACTERS) {
      const accent = buildMode(seed, character, null)['--dsw-alias-brand-primary'];
      assert.ok(contrastRatio(accent, seed.base) >= 3, theme.id + ' ' + mode + ' ' + character + ' accent/base');
      assert.ok(contrastRatio(accent, seed.surface) >= 3, theme.id + ' ' + mode + ' ' + character + ' accent/surface');
    }
    const custom = buildMode(seed, 'signature', '#ff3366')['--dsw-alias-brand-primary'];
    assert.ok(contrastRatio(custom, seed.base) >= 3, theme.id + ' ' + mode + ' custom accent');
    assert.ok(contrastRatio(custom, seed.surface) >= 3, theme.id + ' ' + mode + ' custom accent surface');
  }

  assert.equal(characterAccent(theme.light, 'signature'), buildMode(theme.light, 'signature', null)['--dsw-alias-brand-primary']);
  assert.match(buildMode(theme.light, 'electric', null)['--dsw-alias-brand-primary'], /^#[0-9A-F]{6}$/i);
});

test('overlay and warning surfaces keep the host static text readable', () => {
  const staticTooltipInk = '#FFFFFF';
  const staticToastAction = '#7AAaff';
  for (const theme of THEMES) {
    const tokens = buildThemeTokens(theme, 'signature', null);
    for (const mode of MODES) {
      const tooltipBg = tokens['--dsw-alias-tooltip-bg'][mode];
      const tooltipKeyBg = tokens['--dsw-alias-tooltip-key-bg'][mode];
      assert.ok(contrastRatio(staticTooltipInk, tooltipBg) >= 4.5, theme.id + ' ' + mode + ' tooltip white text');
      assert.ok(contrastRatio(staticTooltipInk, tooltipKeyBg) >= 4.5, theme.id + ' ' + mode + ' tooltip keycap');
      const toastBg = tokens['--dsw-alias-toast-bg'][mode];
      const toastLabel = tokens['--dsw-alias-toast-label'][mode];
      assert.ok(contrastRatio(toastLabel, toastBg) >= 4.5, theme.id + ' ' + mode + ' toast label');
      assert.ok(contrastRatio(staticToastAction, toastBg) >= 4.5, theme.id + ' ' + mode + ' toast action');
      const warnSurface = tokens['--dsw-alias-state-warn-tertiary'][mode];
      const warnLabel = tokens['--dsw-alias-state-warn-label'][mode];
      assert.ok(contrastRatio(warnLabel, warnSurface) >= 3, theme.id + ' ' + mode + ' warning badge');
      assert.ok(contrastRatio(warnLabel, toastBg) >= 3, theme.id + ' ' + mode + ' warning toast icon');
    }
  }
});

test('diff line foregrounds stay readable on their tinted backgrounds', () => {
  for (const theme of THEMES) {
    const tokens = buildThemeTokens(theme, 'signature', null);
    for (const mode of MODES) {
      const addedBg = tokens['--dsw-alias-code-diff-added'][mode];
      const addedInk = tokens['--dsw-alias-state-success-primary'][mode];
      const deletedBg = tokens['--dsw-alias-code-diff-deleted'][mode];
      const deletedInk = tokens['--dsw-alias-state-error-primary'][mode];
      assert.ok(contrastRatio(addedInk, addedBg) >= 4.5, theme.id + ' ' + mode + ' added diff line');
      assert.ok(contrastRatio(deletedInk, deletedBg) >= 4.5, theme.id + ' ' + mode + ' deleted diff line');
      assert.ok(contrastRatio(addedInk, theme[mode].surface) >= 4.5, theme.id + ' ' + mode + ' added ink on surface');
      assert.ok(contrastRatio(deletedInk, theme[mode].surface) >= 4.5, theme.id + ' ' + mode + ' deleted ink on surface');
    }
  }
});

test('locale dictionaries stay in sync', () => {
  assert.deepEqual(Object.keys(EN).sort(), Object.keys(ZH).sort());
  assert.equal(EN['nav.label'], 'Prism Themes');
  assert.equal(ZH['nav.label'], 'Prism 主题');
});
