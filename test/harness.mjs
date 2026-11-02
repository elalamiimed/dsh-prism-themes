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
  const reactStub = createReactStub();
  const module = registration.factory((specifier) => {
    if (specifier === 'react') return reactStub;
    throw new Error('unexpected require: ' + specifier);
  });
  cached = { registration, module, reactStub };
  return cached;
}

/** A tiny React-compatible element/hook stub, enough to render the studio tree. */
export function createReactStub() {
  const Fragment = Symbol.for('prism.fragment');
  const createElement = (type, props, ...children) => ({
    type,
    props: props || {},
    children: children.flat(),
  });
  return {
    Fragment,
    createElement,
    useState(initial) {
      return [typeof initial === 'function' ? initial() : initial, () => {}];
    },
    useEffect() {},
    useId() {
      return 'prism-test-id';
    },
  };
}

/** Render a React-element-like tree produced by the tiny stub into a plain tree. */
export function renderTree(node) {
  if (node === null || node === undefined || node === false) return null;
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(renderTree).filter((child) => child !== null);
  if (typeof node.type === 'function') {
    const props = { ...node.props, children: node.children.length === 1 ? node.children[0] : node.children };
    return renderTree(node.type(props));
  }
  if (node.type === Symbol.for('prism.fragment')) return node.children.map(renderTree);
  return {
    tag: node.type,
    props: node.props,
    children: node.children.map(renderTree).filter((child) => child !== null),
  };
}

/** Count rendered elements with a given className. */
export function countByClass(tree, className) {
  if (tree === null || tree === undefined) return 0;
  if (typeof tree === 'string') return 0;
  if (Array.isArray(tree)) return tree.reduce((total, child) => total + countByClass(child, className), 0);
  const own = typeof tree.props?.className === 'string' && tree.props.className.split(/\s+/).includes(className) ? 1 : 0;
  return own + countByClass(tree.children, className);
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
