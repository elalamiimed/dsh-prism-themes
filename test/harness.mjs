let cached = null;

/** Load the self-contained Client module by intercepting the Module Loader registration. */
export async function loadPlugin() {
  if (cached !== null) return cached;
  let registration = null;
  globalThis.window = {
    __ModuleLoader__: {
      load(candidate) {
        registration = candidate;
      },
    },
  };
  const url = new URL('../client.js', import.meta.url);
  await import(url.href + '?t=' + Date.now());
  if (registration === null) throw new Error('client.js did not call window.__ModuleLoader__.load');
  const reactStub = {};
  const module = registration.factory((specifier) => {
    if (specifier === 'react') return reactStub;
    throw new Error('unexpected require: ' + specifier);
  });
  cached = { registration, module, reactStub };
  return cached;
}

/** Minimal localStorage backed by a Map. */
export function installMemoryStorage() {
  const map = new Map();
  globalThis.localStorage = {
    getItem(key) {
      return map.has(key) ? map.get(key) : null;
    },
    setItem(key, value) {
      map.set(key, String(value));
    },
    removeItem(key) {
      map.delete(key);
    },
    clear() {
      map.clear();
    },
  };
  return map;
}

/** Minimal fake Theme service with layer bookkeeping. */
export function createFakeTheme(initial) {
  const state = {
    preference: initial?.preference || 'system',
    colorScheme: initial?.colorScheme || 'light',
  };
  const layers = [];
  return {
    state,
    layers,
    getTheme() {
      return {
        preference: state.preference,
        fontSizes: { text: 14, code: 11, terminal: 13 },
        fontFamilies: { text: '', code: '', terminal: '' },
        active: {
          id: state.colorScheme,
          colorScheme: state.colorScheme,
          tokens: {},
        },
        themes: [],
        revision: layers.length,
      };
    },
    setTheme(id) {
      state.preference = id;
      if (id === 'light' || id === 'dark') state.colorScheme = id;
    },
    overrideTokens(source, tokens) {
      const layer = { source, tokens, disposed: false };
      layers.push(layer);
      return () => {
        layer.disposed = true;
      };
    },
  };
}
