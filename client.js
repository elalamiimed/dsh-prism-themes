window.__ModuleLoader__.load({
  id: 'dsh-prism-themes',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PACKAGE_ID = 'dsh-prism-themes';
    const SOURCE = PACKAGE_ID + ':palette';
    const NS = 'prism-themes';
    const STORAGE_KEY = 'dsh-prism-themes:preferences:v1';
    const CHARACTERS = ['calm', 'signature', 'electric'];
    const SCHEMES = ['light', 'dark', 'system'];
    const DEFAULT_LIGHT_THEME = 'deepseek-daylight';
    const DEFAULT_DARK_THEME = 'deepseek-abyss';

    const FAMILIES = [
      { id: 'all', labelKey: 'family.all' },
      { id: 'signature', labelKey: 'family.signature' },
      { id: 'nocturne', labelKey: 'family.nocturne' },
      { id: 'botanical', labelKey: 'family.botanical' },
      { id: 'nostalgia', labelKey: 'family.nostalgia' },
      { id: 'minimal', labelKey: 'family.minimal' },
      { id: 'playful', labelKey: 'family.playful' },
    ];

    /* THEMES_DATA_START */
    const THEMES = [
      {
        "id": "deepseek-daylight",
        "name": "DeepSeek Daylight",
        "family": "signature",
        "tagline": "Clear morning light over a deep blue current.",
        "light": {
          "base": "#F5F8FE",
          "surface": "#FFFFFF",
          "surfaceAlt": "#EDF2FC",
          "overlay": "#FBFDFF",
          "border": "#D5DAE4",
          "text": "#0B1526",
          "muted": "#606B7E",
          "accent": "#1D4ED8",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFF4FD",
          "success": "#1F8A4B",
          "warning": "#9F6700",
          "danger": "#C63C3C"
        },
        "dark": {
          "base": "#0A1020",
          "surface": "#111A2E",
          "surfaceAlt": "#0D1526",
          "overlay": "#16203A",
          "border": "#2C3241",
          "text": "#E8EEFA",
          "muted": "#898E97",
          "accent": "#6EA8FF",
          "accentInk": "#050A14",
          "sidebar": "#070C18",
          "success": "#67C986",
          "warning": "#E9A034",
          "danger": "#FF8A82"
        }
      },
      {
        "id": "deepseek-abyss",
        "name": "DeepSeek Abyss",
        "family": "signature",
        "tagline": "Where the current runs quiet and cold.",
        "light": {
          "base": "#F1F6FA",
          "surface": "#FBFDFF",
          "surfaceAlt": "#E6EEF5",
          "overlay": "#F8FCFF",
          "border": "#D0D9E0",
          "text": "#081A24",
          "muted": "#5A6B76",
          "accent": "#0369A1",
          "accentInk": "#FFFFFF",
          "sidebar": "#EAF1F7",
          "success": "#1F8A4B",
          "warning": "#9F6700",
          "danger": "#C63C3C"
        },
        "dark": {
          "base": "#050D16",
          "surface": "#0B1826",
          "surfaceAlt": "#08121C",
          "overlay": "#0F2033",
          "border": "#25313D",
          "text": "#DCEAF5",
          "muted": "#828D95",
          "accent": "#38BDF8",
          "accentInk": "#010C13",
          "sidebar": "#030A12",
          "success": "#67C986",
          "warning": "#E9A034",
          "danger": "#FF8A82"
        }
      },
      {
        "id": "cobalt-ink",
        "name": "Cobalt Ink",
        "family": "signature",
        "tagline": "Cobalt pressed into paper, sharp and deliberate.",
        "light": {
          "base": "#F6F6F2",
          "surface": "#FFFFFF",
          "surfaceAlt": "#EEEEE8",
          "overlay": "#FBFBF8",
          "border": "#DADAD1",
          "text": "#101420",
          "muted": "#656976",
          "accent": "#1E40AF",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFEFEA",
          "success": "#1F8A4B",
          "warning": "#9F6700",
          "danger": "#C63C3C"
        },
        "dark": {
          "base": "#0B0F17",
          "surface": "#121826",
          "surfaceAlt": "#0E141E",
          "overlay": "#171F2E",
          "border": "#2B303C",
          "text": "#E6EAF2",
          "muted": "#888C95",
          "accent": "#5B8CFF",
          "accentInk": "#060A15",
          "sidebar": "#070A10",
          "success": "#67C986",
          "warning": "#E9A034",
          "danger": "#FF8A82"
        }
      },
      {
        "id": "blue-hour",
        "name": "Blue Hour",
        "family": "signature",
        "tagline": "The hush between sunset and streetlights.",
        "light": {
          "base": "#F3F3FB",
          "surface": "#FCFCFF",
          "surfaceAlt": "#EAEAF7",
          "overlay": "#F9F9FF",
          "border": "#D6D6E2",
          "text": "#14142A",
          "muted": "#65667B",
          "accent": "#4F46E5",
          "accentInk": "#FFFFFF",
          "sidebar": "#EDEDF8",
          "success": "#1F8A4B",
          "warning": "#9F6700",
          "danger": "#C63C3C"
        },
        "dark": {
          "base": "#0C0C19",
          "surface": "#16162A",
          "surfaceAlt": "#121224",
          "overlay": "#1C1C38",
          "border": "#2E2F3E",
          "text": "#E9E7F7",
          "muted": "#8C8B97",
          "accent": "#A5B4FC",
          "accentInk": "#080913",
          "sidebar": "#080812",
          "success": "#67C986",
          "warning": "#E9A034",
          "danger": "#FF8A82"
        }
      },
      {
        "id": "midnight-orchid",
        "name": "Midnight Orchid",
        "family": "nocturne",
        "tagline": "Orchid petals under a violet midnight.",
        "light": {
          "base": "#F7F2F9",
          "surface": "#FEFBFF",
          "surfaceAlt": "#F2E8F7",
          "overlay": "#FBF6FE",
          "border": "#DCD4DF",
          "text": "#1D1027",
          "muted": "#6E6478",
          "accent": "#7E22CE",
          "accentInk": "#FFFFFF",
          "sidebar": "#F2EAF6",
          "success": "#27885A",
          "warning": "#AD5D00",
          "danger": "#C73360"
        },
        "dark": {
          "base": "#130F1B",
          "surface": "#1F1829",
          "surfaceAlt": "#1A1323",
          "overlay": "#271E34",
          "border": "#35303F",
          "text": "#EDE4F5",
          "muted": "#938C99",
          "accent": "#C084FC",
          "accentInk": "#0D0712",
          "sidebar": "#0D0A14",
          "success": "#6CC795",
          "warning": "#F2994E",
          "danger": "#FF869F"
        }
      },
      {
        "id": "obsidian-ember",
        "name": "Obsidian Ember",
        "family": "nocturne",
        "tagline": "Obsidian walls, one ember still breathing.",
        "light": {
          "base": "#F4F5F7",
          "surface": "#FFFFFF",
          "surfaceAlt": "#EBEDF1",
          "overlay": "#FAFBFC",
          "border": "#D6DAE2",
          "text": "#14171D",
          "muted": "#646971",
          "accent": "#9A3412",
          "accentInk": "#FFFFFF",
          "sidebar": "#EDEFF2",
          "success": "#27885A",
          "warning": "#AD5D00",
          "danger": "#C73360"
        },
        "dark": {
          "base": "#0A0B0E",
          "surface": "#13151A",
          "surfaceAlt": "#0E1014",
          "overlay": "#1A1D23",
          "border": "#2B2E35",
          "text": "#E9EAEE",
          "muted": "#878A93",
          "accent": "#FF7A45",
          "accentInk": "#130704",
          "sidebar": "#060709",
          "success": "#6CC795",
          "warning": "#F2994E",
          "danger": "#FF869F"
        }
      },
      {
        "id": "ember-noir",
        "name": "Ember Noir",
        "family": "nocturne",
        "tagline": "Burnt umber, cold smoke, a dying fire.",
        "light": {
          "base": "#F6F2EC",
          "surface": "#FDFBF7",
          "surfaceAlt": "#F0E9DF",
          "overlay": "#FBF8F3",
          "border": "#DCD5CB",
          "text": "#1E1712",
          "muted": "#6E6560",
          "accent": "#B45309",
          "accentInk": "#FFFFFF",
          "sidebar": "#F0EAE2",
          "success": "#27885A",
          "warning": "#AD5D00",
          "danger": "#C73360"
        },
        "dark": {
          "base": "#110D0A",
          "surface": "#1E1714",
          "surfaceAlt": "#18120F",
          "overlay": "#251C17",
          "border": "#372F29",
          "text": "#EFE6DE",
          "muted": "#928B83",
          "accent": "#F59E0B",
          "accentInk": "#110802",
          "sidebar": "#0B0806",
          "success": "#6CC795",
          "warning": "#F2994E",
          "danger": "#FF869F"
        }
      },
      {
        "id": "cyber-tide",
        "name": "Cyber Tide",
        "family": "nocturne",
        "tagline": "Neon currents pulling through deep water.",
        "light": {
          "base": "#EEF6F5",
          "surface": "#FAFEFD",
          "surfaceAlt": "#E2F0EE",
          "overlay": "#F5FBFA",
          "border": "#CDDBD9",
          "text": "#08201E",
          "muted": "#576C6A",
          "accent": "#0F766E",
          "accentInk": "#FFFFFF",
          "sidebar": "#E8F3F1",
          "success": "#27885A",
          "warning": "#AD5D00",
          "danger": "#C73360"
        },
        "dark": {
          "base": "#050F0E",
          "surface": "#0B1A18",
          "surfaceAlt": "#081311",
          "overlay": "#0F2321",
          "border": "#233331",
          "text": "#D9F2EE",
          "muted": "#7C908C",
          "accent": "#2DD4BF",
          "accentInk": "#000D0B",
          "sidebar": "#030A09",
          "success": "#6CC795",
          "warning": "#F2994E",
          "danger": "#FF869F"
        }
      },
      {
        "id": "sea-glass",
        "name": "Sea Glass",
        "family": "botanical",
        "tagline": "Salt-worn glass in soft morning green.",
        "light": {
          "base": "#F1F6F3",
          "surface": "#FAFDFB",
          "surfaceAlt": "#E5EFE9",
          "overlay": "#F7FCF9",
          "border": "#CFD9D3",
          "text": "#10241D",
          "muted": "#5A6C65",
          "accent": "#2F7D62",
          "accentInk": "#FFFFFF",
          "sidebar": "#EAF1EC",
          "success": "#47854A",
          "warning": "#9D671C",
          "danger": "#BC4A3F"
        },
        "dark": {
          "base": "#071410",
          "surface": "#0C1D18",
          "surfaceAlt": "#091713",
          "overlay": "#10251F",
          "border": "#24352F",
          "text": "#DDEFE8",
          "muted": "#83908B",
          "accent": "#4ECCA3",
          "accentInk": "#010D08",
          "sidebar": "#040D0A",
          "success": "#84C485",
          "warning": "#DEA45F",
          "danger": "#FF8B7D"
        }
      },
      {
        "id": "green-room",
        "name": "Green Room",
        "family": "botanical",
        "tagline": "A quiet room full of growing things.",
        "light": {
          "base": "#F3F5EC",
          "surface": "#FCFDF7",
          "surfaceAlt": "#EAEEDE",
          "overlay": "#F9FBF3",
          "border": "#D6D9CC",
          "text": "#1B2412",
          "muted": "#626B5A",
          "accent": "#2F6B34",
          "accentInk": "#FFFFFF",
          "sidebar": "#EDF0E3",
          "success": "#47854A",
          "warning": "#9D671C",
          "danger": "#BC4A3F"
        },
        "dark": {
          "base": "#0D120B",
          "surface": "#151C12",
          "surfaceAlt": "#10160E",
          "overlay": "#1B2416",
          "border": "#2C342A",
          "text": "#E4EBDC",
          "muted": "#8A8F83",
          "accent": "#9BCF53",
          "accentInk": "#070C03",
          "sidebar": "#080C06",
          "success": "#84C485",
          "warning": "#DEA45F",
          "danger": "#FF8B7D"
        }
      },
      {
        "id": "moss-clay",
        "name": "Moss Clay",
        "family": "botanical",
        "tagline": "Moss over clay, rain long finished.",
        "light": {
          "base": "#F4F2E9",
          "surface": "#FCFBF4",
          "surfaceAlt": "#EDEADB",
          "overlay": "#F9F8F1",
          "border": "#D9D6CA",
          "text": "#24211A",
          "muted": "#6A665E",
          "accent": "#5C7A2E",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFEDE1",
          "success": "#47854A",
          "warning": "#9D671C",
          "danger": "#BC4A3F"
        },
        "dark": {
          "base": "#13110A",
          "surface": "#1E1B11",
          "surfaceAlt": "#18150E",
          "overlay": "#242016",
          "border": "#353227",
          "text": "#EAE6D6",
          "muted": "#928E82",
          "accent": "#C7B96A",
          "accentInk": "#0C0A03",
          "sidebar": "#0C0A06",
          "success": "#84C485",
          "warning": "#DEA45F",
          "danger": "#FF8B7D"
        }
      },
      {
        "id": "frost-garden",
        "name": "Frost Garden",
        "family": "botanical",
        "tagline": "Frost on the greenhouse, green beneath.",
        "light": {
          "base": "#EFF6F1",
          "surface": "#FBFEFA",
          "surfaceAlt": "#E3F0E7",
          "overlay": "#F6FCF8",
          "border": "#D0DBD3",
          "text": "#0F2017",
          "muted": "#5C6C63",
          "accent": "#166534",
          "accentInk": "#FFFFFF",
          "sidebar": "#E8F2EB",
          "success": "#47854A",
          "warning": "#9D671C",
          "danger": "#BC4A3F"
        },
        "dark": {
          "base": "#081310",
          "surface": "#0F1E19",
          "surfaceAlt": "#0B1814",
          "overlay": "#14261F",
          "border": "#263531",
          "text": "#E0EFE7",
          "muted": "#85918A",
          "accent": "#6EE7B7",
          "accentInk": "#020D08",
          "sidebar": "#040D0A",
          "success": "#84C485",
          "warning": "#DEA45F",
          "danger": "#FF8B7D"
        }
      },
      {
        "id": "terminal-amber",
        "name": "Terminal Amber",
        "family": "nostalgia",
        "tagline": "Old phosphor glow, patient and warm.",
        "light": {
          "base": "#F6F1E4",
          "surface": "#FEFAF0",
          "surfaceAlt": "#F1E8D5",
          "overlay": "#FBF7EB",
          "border": "#DBD5C5",
          "text": "#221B10",
          "muted": "#6D655B",
          "accent": "#A16207",
          "accentInk": "#FFFFFF",
          "sidebar": "#F0EAD9",
          "success": "#568247",
          "warning": "#A95F23",
          "danger": "#BE4551"
        },
        "dark": {
          "base": "#100D08",
          "surface": "#1D1810",
          "surfaceAlt": "#17130A",
          "overlay": "#241D13",
          "border": "#353027",
          "text": "#F2E6C9",
          "muted": "#948C76",
          "accent": "#FBBF24",
          "accentInk": "#0F0901",
          "sidebar": "#0A0805",
          "success": "#92C082",
          "warning": "#EC9C63",
          "danger": "#FF888E"
        }
      },
      {
        "id": "newsprint",
        "name": "Newsprint",
        "family": "nostalgia",
        "tagline": "Ink and pulp, folded on the porch.",
        "light": {
          "base": "#F3EFE4",
          "surface": "#FBF8EF",
          "surfaceAlt": "#EDE7D7",
          "overlay": "#F8F5EC",
          "border": "#D9D3C5",
          "text": "#1B1813",
          "muted": "#69655C",
          "accent": "#2B2118",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFEAE0",
          "success": "#568247",
          "warning": "#A95F23",
          "danger": "#BE4551"
        },
        "dark": {
          "base": "#14120F",
          "surface": "#1D1A16",
          "surfaceAlt": "#171410",
          "overlay": "#24201B",
          "border": "#35312A",
          "text": "#EDE7DB",
          "muted": "#928D84",
          "accent": "#E9DCC3",
          "accentInk": "#0C0A07",
          "sidebar": "#0D0B09",
          "success": "#92C082",
          "warning": "#EC9C63",
          "danger": "#FF888E"
        }
      },
      {
        "id": "arcade-neon",
        "name": "Arcade Neon",
        "family": "nostalgia",
        "tagline": "Tokens, high scores, and cabinet glow.",
        "light": {
          "base": "#F4F1EF",
          "surface": "#FDFBFA",
          "surfaceAlt": "#EEE9E6",
          "overlay": "#FAF7F6",
          "border": "#DDD5CF",
          "text": "#17131A",
          "muted": "#6A656D",
          "accent": "#A21CAF",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFEAE7",
          "success": "#568247",
          "warning": "#A95F23",
          "danger": "#BE4551"
        },
        "dark": {
          "base": "#0B0A12",
          "surface": "#171522",
          "surfaceAlt": "#11101B",
          "overlay": "#1D1A2C",
          "border": "#2F2E3A",
          "text": "#F0EDF7",
          "muted": "#8C8A93",
          "accent": "#E879F9",
          "accentInk": "#0F0710",
          "sidebar": "#070610",
          "success": "#92C082",
          "warning": "#EC9C63",
          "danger": "#FF888E"
        }
      },
      {
        "id": "vaporwave",
        "name": "Vaporwave",
        "family": "nostalgia",
        "tagline": "Sunset gradients on a paused tape.",
        "light": {
          "base": "#F9F0F6",
          "surface": "#FFFBFE",
          "surfaceAlt": "#F5E6F1",
          "overlay": "#FDF6FB",
          "border": "#E0D4DC",
          "text": "#24151F",
          "muted": "#73626D",
          "accent": "#0E7490",
          "accentInk": "#FFFFFF",
          "sidebar": "#F6E9F2",
          "success": "#568247",
          "warning": "#A95F23",
          "danger": "#BE4551"
        },
        "dark": {
          "base": "#130C1B",
          "surface": "#20152A",
          "surfaceAlt": "#1A1323",
          "overlay": "#271A36",
          "border": "#352F3E",
          "text": "#F2E5F7",
          "muted": "#948A97",
          "accent": "#67E8F9",
          "accentInk": "#010D0F",
          "sidebar": "#0E0814",
          "success": "#92C082",
          "warning": "#EC9C63",
          "danger": "#FF888E"
        }
      },
      {
        "id": "graphite",
        "name": "Graphite",
        "family": "minimal",
        "tagline": "Precision gray, without the noise.",
        "light": {
          "base": "#F4F5F6",
          "surface": "#FCFCFD",
          "surfaceAlt": "#EBEDEF",
          "overlay": "#F8F9FA",
          "border": "#D1D8DF",
          "text": "#16181B",
          "muted": "#646971",
          "accent": "#475569",
          "accentInk": "#FFFFFF",
          "sidebar": "#EFF1F2",
          "success": "#48835E",
          "warning": "#986A2F",
          "danger": "#AC5853"
        },
        "dark": {
          "base": "#121417",
          "surface": "#1A1D21",
          "surfaceAlt": "#15181B",
          "overlay": "#20242A",
          "border": "#2F343A",
          "text": "#E6E8EB",
          "muted": "#8A9098",
          "accent": "#94A3B8",
          "accentInk": "#080A0D",
          "sidebar": "#0C0E10",
          "success": "#85C19A",
          "warning": "#D8A76D",
          "danger": "#EF958E"
        }
      },
      {
        "id": "porcelain",
        "name": "Porcelain",
        "family": "minimal",
        "tagline": "Cool clay glaze, almost quiet.",
        "light": {
          "base": "#F2F5F7",
          "surface": "#FBFDFE",
          "surfaceAlt": "#E7EDF0",
          "overlay": "#F7FAFB",
          "border": "#D1D9DF",
          "text": "#122028",
          "muted": "#5D6A73",
          "accent": "#3E6B7A",
          "accentInk": "#FFFFFF",
          "sidebar": "#EDF2F5",
          "success": "#48835E",
          "warning": "#986A2F",
          "danger": "#AC5853"
        },
        "dark": {
          "base": "#0E1417",
          "surface": "#151D21",
          "surfaceAlt": "#111820",
          "overlay": "#1B2429",
          "border": "#2A3439",
          "text": "#E2EAEE",
          "muted": "#869196",
          "accent": "#7FB3C2",
          "accentInk": "#050B0D",
          "sidebar": "#090E11",
          "success": "#85C19A",
          "warning": "#D8A76D",
          "danger": "#EF958E"
        }
      },
      {
        "id": "saffron-paper",
        "name": "Saffron Paper",
        "family": "minimal",
        "tagline": "Warm paper and a single saffron line.",
        "light": {
          "base": "#F8F3E6",
          "surface": "#FFFDF5",
          "surfaceAlt": "#F4EBD6",
          "overlay": "#FCF8EE",
          "border": "#DDD7C7",
          "text": "#241E10",
          "muted": "#6D675A",
          "accent": "#854D0E",
          "accentInk": "#FFFFFF",
          "sidebar": "#F3EDDD",
          "success": "#48835E",
          "warning": "#986A2F",
          "danger": "#AC5853"
        },
        "dark": {
          "base": "#14110A",
          "surface": "#1D1910",
          "surfaceAlt": "#17130C",
          "overlay": "#241F14",
          "border": "#353126",
          "text": "#EFE6D2",
          "muted": "#948C7D",
          "accent": "#FACC15",
          "accentInk": "#0E0A01",
          "sidebar": "#0D0B06",
          "success": "#85C19A",
          "warning": "#D8A76D",
          "danger": "#EF958E"
        }
      },
      {
        "id": "terracotta-sun",
        "name": "Terracotta Sun",
        "family": "minimal",
        "tagline": "Clay rooftops holding late orange light.",
        "light": {
          "base": "#F8F1EA",
          "surface": "#FFFBF6",
          "surfaceAlt": "#F5E8DB",
          "overlay": "#FCF7F1",
          "border": "#DFD5CB",
          "text": "#251710",
          "muted": "#73645D",
          "accent": "#B5482A",
          "accentInk": "#FFFFFF",
          "sidebar": "#F4EAE0",
          "success": "#48835E",
          "warning": "#986A2F",
          "danger": "#AE4E7D"
        },
        "dark": {
          "base": "#170F0B",
          "surface": "#231812",
          "surfaceAlt": "#1D140F",
          "overlay": "#291D16",
          "border": "#3B2F29",
          "text": "#F2E3D7",
          "muted": "#978C82",
          "accent": "#FDBA74",
          "accentInk": "#110802",
          "sidebar": "#0F0906",
          "success": "#85C19A",
          "warning": "#D8A76D",
          "danger": "#F28BBA"
        }
      },
      {
        "id": "bubblegum",
        "name": "Bubblegum",
        "family": "playful",
        "tagline": "Sugar-pink pop with a steady heart.",
        "light": {
          "base": "#FDF0F5",
          "surface": "#FFF9FC",
          "surfaceAlt": "#FBE5EF",
          "overlay": "#FEF5F9",
          "border": "#E2D1D8",
          "text": "#29141E",
          "muted": "#78616B",
          "accent": "#DA2576",
          "accentInk": "#FFFFFF",
          "sidebar": "#FBEAF1",
          "success": "#008C3F",
          "warning": "#A76100",
          "danger": "#CC3148"
        },
        "dark": {
          "base": "#160B13",
          "surface": "#23141E",
          "surfaceAlt": "#1C1019",
          "overlay": "#2B1926",
          "border": "#3B2C37",
          "text": "#F7E4EE",
          "muted": "#978990",
          "accent": "#F472B6",
          "accentInk": "#12060C",
          "sidebar": "#10080D",
          "success": "#54CE76",
          "warning": "#F69828",
          "danger": "#FF888E"
        }
      },
      {
        "id": "mango-tango",
        "name": "Mango Tango",
        "family": "playful",
        "tagline": "Ripe mango energy, no sunscreen.",
        "light": {
          "base": "#FDF1E4",
          "surface": "#FFFAF3",
          "surfaceAlt": "#FDE8CE",
          "overlay": "#FEF6EC",
          "border": "#E1D4C5",
          "text": "#2A1809",
          "muted": "#766456",
          "accent": "#B7410E",
          "accentInk": "#FFFFFF",
          "sidebar": "#FBEBD9",
          "success": "#008C3F",
          "warning": "#A76100",
          "danger": "#B54481"
        },
        "dark": {
          "base": "#170F08",
          "surface": "#24180F",
          "surfaceAlt": "#1D140C",
          "overlay": "#2C1D12",
          "border": "#3B3026",
          "text": "#F7E7D4",
          "muted": "#988C7D",
          "accent": "#FB923C",
          "accentInk": "#120702",
          "sidebar": "#0F0904",
          "success": "#54CE76",
          "warning": "#F69828",
          "danger": "#FB83BF"
        }
      },
      {
        "id": "lavender-haze",
        "name": "Lavender Haze",
        "family": "playful",
        "tagline": "Soft lilac fog over a quiet garden.",
        "light": {
          "base": "#F6F2FB",
          "surface": "#FEFCFF",
          "surfaceAlt": "#F0E9F9",
          "overlay": "#FAF7FE",
          "border": "#DAD5E1",
          "text": "#1E1530",
          "muted": "#6B6579",
          "accent": "#7C3AED",
          "accentInk": "#FFFFFF",
          "sidebar": "#F1EBF8",
          "success": "#008C3F",
          "warning": "#A76100",
          "danger": "#B54481"
        },
        "dark": {
          "base": "#120D1A",
          "surface": "#1E1629",
          "surfaceAlt": "#181322",
          "overlay": "#241B31",
          "border": "#342F3E",
          "text": "#EFE6F8",
          "muted": "#918B98",
          "accent": "#C4B5FD",
          "accentInk": "#0A0912",
          "sidebar": "#0B0711",
          "success": "#54CE76",
          "warning": "#F69828",
          "danger": "#FB83BF"
        }
      },
      {
        "id": "citrus-pop",
        "name": "Citrus Pop",
        "family": "playful",
        "tagline": "Lime soda fizz, sharp and bright.",
        "light": {
          "base": "#F4F8E7",
          "surface": "#FBFEF4",
          "surfaceAlt": "#EAF2D6",
          "overlay": "#F8FCEF",
          "border": "#D5DAC7",
          "text": "#1C2409",
          "muted": "#656C58",
          "accent": "#3F6212",
          "accentInk": "#FFFFFF",
          "sidebar": "#F0F5DF",
          "success": "#008C3F",
          "warning": "#A76100",
          "danger": "#B54481"
        },
        "dark": {
          "base": "#0F1306",
          "surface": "#171D0B",
          "surfaceAlt": "#12170A",
          "overlay": "#1D2610",
          "border": "#2F3424",
          "text": "#EDF3D8",
          "muted": "#8C907B",
          "accent": "#A3E635",
          "accentInk": "#070C03",
          "sidebar": "#090C04",
          "success": "#54CE76",
          "warning": "#F69828",
          "danger": "#FB83BF"
        }
      }
    ];
    /* THEMES_DATA_END */

    const THEME_BY_ID = new Map(THEMES.map((theme) => [theme.id, theme]));
    const SWATCH_KEYS = ['base', 'surface', 'accent', 'text', 'muted', 'sidebar'];

    const EN = {
      'nav.label': 'Prism Themes',
      'hero.eyebrow': 'Prism Theme Studio',
      'hero.title': 'Give your harness a new light.',
      'hero.subtitle': 'Twenty-four hand-tuned palettes, six moods, one canvas. Every theme carries its own light and dark half.',
      'hero.current': 'Currently wearing',
      'native.name': 'DeepSeek Native',
      'scheme.label': 'Palette mode',
      'scheme.light': 'Light',
      'scheme.dark': 'Dark',
      'scheme.system': 'System',
      'scheme.current': 'Resolved',
      'character.label': 'Accent character',
      'character.calm': 'Calm',
      'character.signature': 'Signature',
      'character.electric': 'Electric',
      'accent.label': 'Accent override',
      'accent.reset': 'Reset',
      'accent.native': 'Pick a Prism theme to tune its accent.',
      'action.surprise': 'Surprise me',
      'action.native': 'Native theme',
      'action.export': 'Export',
      'search.placeholder': 'Search a mood or a name…',
      'search.label': 'Search themes',
      'favorites.only': 'Favorites',
      'favorites.count': 'Favorites',
      'family.all': 'All',
      'family.group': 'Theme families',
      'family.signature': 'Signature',
      'family.nocturne': 'Nocturne',
      'family.botanical': 'Botanical',
      'family.nostalgia': 'Nostalgia',
      'family.minimal': 'Minimal',
      'family.playful': 'Playful',
      'gallery.active': 'Active',
      'gallery.favorite': 'Favorite',
      'gallery.unfavorite': 'Remove favorite',
      'gallery.count': 'themes',
      'gallery.empty': 'No theme in this corner of the prism.',
      'gallery.clear': 'Clear filters',
      'gallery.hint': 'Click a theme to wear it instantly. Star the ones worth returning to.',
      'gallery.favoriteAria': 'Favorite theme',
      'footer.note': 'Saved in this browser only. Prism writes no settings and sends nothing over the network.',
      'footer.native': 'Native theme is active. Pick any palette to begin.',
    };

    const ZH = {
      'nav.label': 'Prism 主题',
      'hero.eyebrow': 'Prism 主题工作室',
      'hero.title': '给工作台换一束光。',
      'hero.subtitle': '24 套手工调校的配色，六种气质，一块画布。每套主题都自带明暗双生版本。',
      'hero.current': '当前主题',
      'native.name': 'DeepSeek 原生',
      'scheme.label': '明暗模式',
      'scheme.light': '浅色',
      'scheme.dark': '深色',
      'scheme.system': '跟随系统',
      'scheme.current': '实际',
      'character.label': '强调色气质',
      'character.calm': '柔和',
      'character.signature': '招牌',
      'character.electric': '电光',
      'accent.label': '自定义强调色',
      'accent.reset': '重置',
      'accent.native': '选择一个 Prism 主题后即可调节强调色。',
      'action.surprise': '随机换色',
      'action.native': '原生主题',
      'action.export': '导出',
      'search.placeholder': '搜索气质或主题名…',
      'search.label': '搜索主题',
      'favorites.only': '收藏',
      'favorites.count': '收藏',
      'family.all': '全部',
      'family.group': '主题气质',
      'family.signature': '招牌',
      'family.nocturne': '夜曲',
      'family.botanical': '植物',
      'family.nostalgia': '复古',
      'family.minimal': '极简',
      'family.playful': '俏皮',
      'gallery.active': '使用中',
      'gallery.favorite': '收藏',
      'gallery.unfavorite': '取消收藏',
      'gallery.count': '套主题',
      'gallery.empty': '棱镜的这一角还没有主题。',
      'gallery.clear': '清除筛选',
      'gallery.hint': '点击主题立即换上；点亮星标，留住想常驻的那一套。',
      'gallery.favoriteAria': '收藏主题',
      'footer.note': '偏好只保存在当前浏览器。Prism 不写入设置，也不发送任何网络请求。',
      'footer.native': '当前使用原生主题。选择任意配色开始。',
    };

    const CSS = `
.prism-root {
  --ds-color-brand-50: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent);
  --ds-color-brand-100: color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
  --ds-color-brand-500: var(--dsw-alias-brand-primary);
  --ds-color-brand-600: var(--dsw-alias-button-primary-hover, var(--dsw-alias-brand-primary));
  --ds-color-brand-700: var(--dsw-alias-brand-primary-invert, var(--dsw-alias-brand-primary));
  --ds-color-neutral-0: var(--dsw-alias-bg-layer-1);
  --ds-color-neutral-100: var(--dsw-alias-bg-base);
  --ds-color-neutral-200: var(--dsw-alias-bg-layer-2);
  --ds-color-neutral-300: var(--dsw-alias-border-l1);
  --ds-color-neutral-400: var(--dsw-alias-label-tertiary, var(--dsw-alias-label-secondary));
  --ds-color-neutral-500: var(--dsw-alias-label-secondary);
  --ds-color-neutral-700: var(--dsw-alias-label-primary-dimmed, var(--dsw-alias-label-primary));
  --ds-color-neutral-900: var(--dsw-alias-label-primary);
  --ds-color-success: var(--dsw-alias-state-success-primary);
  --ds-color-warning: var(--dsw-alias-state-warn-primary);
  --ds-color-danger: var(--dsw-alias-state-error-primary);
  --ds-color-info: var(--dsw-alias-state-business-primary);
  --ds-font-sans: var(--dsw-font-family, "Segoe UI", system-ui, -apple-system, sans-serif);
  --ds-font-mono: var(--ds-font-family-code, "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace);
  --ds-font-size-display: 40px;
  --ds-line-height-display: 48px;
  --ds-font-size-h1: 32px;
  --ds-line-height-h1: 40px;
  --ds-font-size-h2: 24px;
  --ds-line-height-h2: 32px;
  --ds-font-size-h3: 20px;
  --ds-line-height-h3: 28px;
  --ds-font-size-body-lg: 18px;
  --ds-line-height-body-lg: 28px;
  --ds-font-size-body: 16px;
  --ds-line-height-body: 24px;
  --ds-font-size-body-sm: 14px;
  --ds-line-height-body-sm: 20px;
  --ds-font-size-caption: 12px;
  --ds-line-height-caption: 16px;
  --ds-font-weight-regular: 400;
  --ds-font-weight-medium: 500;
  --ds-font-weight-semibold: 600;
  --ds-font-weight-bold: 700;
  --ds-letter-spacing-caption: 0.01em;
  --ds-letter-spacing-h2: -0.01em;
  --ds-space-0: 0px;
  --ds-space-1: 4px;
  --ds-space-2: 8px;
  --ds-space-3: 12px;
  --ds-space-4: 16px;
  --ds-space-5: 20px;
  --ds-space-6: 24px;
  --ds-space-8: 32px;
  --ds-space-10: 40px;
  --ds-space-12: 48px;
  --ds-space-16: 64px;
  --ds-space-20: 80px;
  --ds-space-24: 96px;
  --ds-radius-sm: var(--dsw-radius-xs);
  --ds-radius-md: var(--dsw-radius-sm);
  --ds-radius-lg: var(--dsw-radius-md);
  --ds-radius-xl: var(--dsw-radius-lg);
  --ds-radius-full: 9999px;
  --ds-shadow-sm: var(--dsw-elevation-panel, 0 1px 2px rgba(15, 23, 42, 0.08));
  --ds-shadow-md: var(--dsw-elevation-prominent, 0 4px 12px rgba(15, 23, 42, 0.10));
  --ds-shadow-lg: var(--dsw-elevation-prominent, 0 12px 32px rgba(15, 23, 42, 0.16));
  --ds-border-width: 1px;
  --ds-breakpoint-sm: 640px;
  --ds-breakpoint-md: 768px;
  --ds-breakpoint-lg: 1024px;
  --ds-breakpoint-xl: 1280px;
  --prism-content-max: 768px;
  --prism-card-min: 204px;
  --prism-search-min: 256px;
  --prism-preview-height: calc(var(--ds-space-24) + var(--ds-space-6));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-5);
  width: 100%;
  max-width: var(--prism-content-max);
  color: var(--ds-color-neutral-900);
  font-family: var(--ds-font-sans);
  font-size: var(--ds-font-size-body-sm);
  line-height: var(--ds-line-height-body-sm);
}
.prism-root *,
.prism-root *::before,
.prism-root *::after { box-sizing: border-box; }
.prism-root :is(button, input):focus-visible {
  outline: var(--dsw-focus-ring-width, 2px) solid var(--dsw-focus-ring-color, var(--ds-color-brand-500));
  outline-offset: 2px;
}
.prism-sr-only {
  position: absolute;
  width: var(--ds-border-width);
  height: var(--ds-border-width);
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.prism-hero {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--ds-space-5);
  padding: var(--ds-space-6);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-lg);
  background: linear-gradient(140deg, var(--dsw-alias-bg-module-platform), var(--ds-color-neutral-0) 62%);
  box-shadow: var(--ds-shadow-sm);
}
.prism-hero-copy {
  flex: 1 1 384px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-2);
}
.prism-eyebrow {
  color: var(--dsw-alias-prism-accent, var(--ds-color-brand-500));
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: var(--ds-letter-spacing-caption);
  text-transform: uppercase;
}
.prism-title {
  margin: 0;
  color: var(--ds-color-neutral-900);
  font-size: var(--ds-font-size-h2);
  line-height: var(--ds-line-height-h2);
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: var(--ds-letter-spacing-h2);
}
.prism-subtitle {
  margin: 0;
  max-width: 480px;
  color: var(--ds-color-neutral-500);
  font-size: var(--ds-font-size-body-sm);
  line-height: var(--ds-line-height-body-sm);
}
.prism-current {
  flex: 0 1 224px;
  min-width: calc(var(--ds-space-24) + var(--ds-space-16));
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-2);
  padding: var(--ds-space-4);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-md);
  background: color-mix(in srgb, var(--ds-color-neutral-0) 76%, transparent);
}
.prism-current-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ds-space-2);
}
.prism-current-kicker {
  color: var(--ds-color-neutral-400);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ds-letter-spacing-caption);
}
.prism-current-scheme {
  color: var(--ds-color-neutral-500);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
}
.prism-current-name {
  color: var(--ds-color-neutral-900);
  font-size: var(--ds-font-size-h3);
  line-height: var(--ds-line-height-h3);
  font-weight: var(--ds-font-weight-semibold);
}
.prism-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ds-space-1);
}
.prism-swatch {
  width: var(--ds-space-3);
  height: var(--ds-space-3);
  border-radius: var(--ds-radius-full);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  background: var(--ds-color-neutral-200);
}
.prism-panel {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-4);
  padding: var(--ds-space-4);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-lg);
  background: var(--ds-color-neutral-0);
  box-shadow: var(--ds-shadow-sm);
}
.prism-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: var(--ds-space-4);
}
.prism-field {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-2);
}
.prism-field-label {
  color: var(--ds-color-neutral-500);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
}
.prism-segmented {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-1);
  padding: var(--ds-space-1);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  background: var(--ds-color-neutral-100);
}
.prism-seg {
  border: 0;
  border-radius: var(--ds-radius-full);
  padding: var(--ds-space-1) var(--ds-space-3);
  background: transparent;
  color: var(--ds-color-neutral-500);
  font-family: inherit;
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
  cursor: pointer;
  transition: background var(--ds-transition-duration-fast, 0.1s) ease, color var(--ds-transition-duration-fast, 0.1s) ease;
}
.prism-seg:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--ds-color-neutral-900);
}
.prism-seg[aria-pressed="true"] {
  background: var(--ds-color-neutral-0);
  color: var(--ds-color-neutral-900);
  font-weight: var(--ds-font-weight-semibold);
  box-shadow: var(--ds-shadow-sm);
}
.prism-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ds-space-2);
  margin-left: auto;
}
.prism-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ds-space-2);
  min-height: var(--ds-space-8);
  padding: var(--ds-space-1) var(--ds-space-3);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  background: var(--ds-color-neutral-0);
  color: var(--ds-color-neutral-900);
  font-family: inherit;
  font-size: var(--ds-font-size-body-sm);
  line-height: var(--ds-line-height-body-sm);
  font-weight: var(--ds-font-weight-medium);
  cursor: pointer;
  transition: background var(--ds-transition-duration-fast, 0.1s) ease, border-color var(--ds-transition-duration-fast, 0.1s) ease;
}
.prism-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
  border-color: var(--ds-color-neutral-400);
}
.prism-btn:disabled {
  opacity: 0.45;
  cursor: default;
}
.prism-btn-primary {
  border-color: var(--dsw-alias-button-primary-fill);
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted));
}
.prism-btn-primary:hover:not(:disabled) {
  border-color: var(--dsw-alias-button-primary-hover);
  background: var(--dsw-alias-button-primary-hover);
}
.prism-btn-ghost {
  background: transparent;
}
.prism-btn.is-active {
  border-color: var(--ds-color-brand-500);
  color: var(--ds-color-brand-600);
  background: var(--ds-color-brand-50);
}
.prism-icon {
  display: block;
  width: 1em;
  height: 1em;
  flex: none;
}
.prism-accent-row {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2);
}
.prism-accent-swatch {
  position: relative;
  display: inline-flex;
  width: var(--ds-space-8);
  height: var(--ds-space-8);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  overflow: hidden;
  cursor: pointer;
}
.prism-accent-swatch input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  opacity: 0;
  cursor: pointer;
}
.prism-accent-swatch input:disabled { cursor: default; }
.prism-accent-swatch:focus-within {
  outline: var(--dsw-focus-ring-width, 2px) solid var(--dsw-focus-ring-color, var(--ds-color-brand-500));
  outline-offset: 2px;
}
.prism-accent-value {
  color: var(--ds-color-neutral-500);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-variant-numeric: tabular-nums;
}
.prism-text-btn {
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--ds-color-brand-500);
  font-family: inherit;
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
  cursor: pointer;
}
.prism-text-btn:hover { text-decoration: underline; }
.prism-hint {
  color: var(--ds-color-neutral-400);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
}
.prism-filterbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ds-space-3);
}
.prism-search {
  flex: 1 1 var(--prism-search-min);
  min-width: var(--prism-search-min);
  display: flex;
  align-items: center;
  gap: var(--ds-space-2);
  padding: var(--ds-space-2) var(--ds-space-3);
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  background: var(--ds-color-neutral-0);
  color: var(--ds-color-neutral-400);
}
.prism-search input {
  width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--ds-color-neutral-900);
  font-family: inherit;
  font-size: var(--ds-font-size-body-sm);
  line-height: var(--ds-line-height-body-sm);
}
.prism-search input::placeholder { color: var(--ds-color-neutral-400); }
.prism-search input:focus { outline: none; }
.prism-search:focus-within {
  border-color: var(--ds-color-brand-500);
  box-shadow: 0 0 0 var(--ds-border-width) var(--ds-color-brand-500);
}
.prism-families {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ds-space-1);
}
.prism-family {
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  padding: var(--ds-space-1) var(--ds-space-3);
  background: var(--ds-color-neutral-0);
  color: var(--ds-color-neutral-500);
  font-family: inherit;
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
  cursor: pointer;
}
.prism-family:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--ds-color-neutral-900);
}
.prism-family[aria-pressed="true"] {
  border-color: var(--ds-color-brand-500);
  background: var(--ds-color-brand-50);
  color: var(--ds-color-brand-600);
}
.prism-favorites-toggle { flex: none; }
.prism-gallery-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ds-space-3);
  color: var(--ds-color-neutral-400);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
}
.prism-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--prism-card-min), 1fr));
  gap: var(--ds-space-4);
}
.prism-card-wrap { position: relative; min-width: 0; }
.prism-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-lg);
  background: var(--ds-color-neutral-0);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color var(--ds-transition-duration-fast, 0.1s) ease, box-shadow var(--ds-transition-duration-fast, 0.1s) ease;
}
.prism-card:hover {
  border-color: var(--ds-color-neutral-400);
  box-shadow: var(--ds-shadow-md);
}
.prism-card.is-active {
  border-color: var(--ds-color-brand-500);
  box-shadow: 0 0 0 var(--ds-border-width) var(--ds-color-brand-500), var(--ds-shadow-md);
}
.prism-preview {
  display: flex;
  flex-direction: column;
  height: var(--prism-preview-height);
  border-bottom: var(--ds-border-width) solid var(--p-border);
  background: var(--p-base);
}
.prism-preview-chrome {
  display: flex;
  align-items: center;
  gap: var(--ds-space-1);
  padding: 0 var(--ds-space-2);
  height: var(--ds-space-8);
  border-bottom: var(--ds-border-width) solid var(--p-border);
  background: var(--p-surface);
}
.prism-preview-dot {
  width: var(--ds-space-1);
  height: var(--ds-space-1);
  border-radius: var(--ds-radius-full);
  background: var(--p-muted);
  opacity: 0.5;
}
.prism-preview-address {
  flex: 1;
  height: var(--ds-space-1);
  margin-left: var(--ds-space-1);
  border-radius: var(--ds-radius-full);
  background: var(--p-border);
  opacity: 0.8;
}
.prism-preview-body {
  display: grid;
  grid-template-columns: 27% 1fr;
  flex: 1;
  min-height: 0;
}
.prism-preview-rail {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1);
  padding: var(--ds-space-2);
  border-right: var(--ds-border-width) solid var(--p-border);
  background: var(--p-sidebar);
}
.prism-preview-logo {
  width: var(--ds-space-2);
  height: var(--ds-space-2);
  margin-bottom: var(--ds-space-1);
  border-radius: var(--ds-radius-full);
  background: var(--p-accent);
}
.prism-preview-line {
  height: 2px;
  border-radius: var(--ds-radius-full);
  background: var(--p-muted);
  opacity: 0.55;
}
.prism-preview-line:nth-child(3) { width: 68%; }
.prism-preview-line:nth-child(4) { width: 82%; }
.prism-preview-main {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1);
  padding: var(--ds-space-2);
  background: var(--p-base);
}
.prism-preview-title {
  width: 62%;
  height: 6px;
  border-radius: var(--ds-radius-full);
  background: var(--p-text);
}
.prism-preview-copy {
  width: 88%;
  height: 2px;
  border-radius: var(--ds-radius-full);
  background: var(--p-muted);
  opacity: 0.55;
}
.prism-preview-copy.is-short { width: 54%; }
.prism-preview-pill {
  align-self: flex-end;
  width: var(--ds-space-8);
  height: var(--ds-space-2);
  margin-top: auto;
  border-radius: var(--ds-radius-full);
  background: var(--p-accent);
}
.prism-card-body {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1);
  padding: var(--ds-space-3);
}
.prism-card-eyebrow {
  color: var(--ds-color-neutral-400);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
  letter-spacing: var(--ds-letter-spacing-caption);
  text-transform: uppercase;
}
.prism-card-name {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ds-space-2);
  row-gap: var(--ds-space-1);
  color: var(--ds-color-neutral-900);
  font-size: var(--ds-font-size-body-sm);
  line-height: var(--ds-line-height-body-sm);
  font-weight: var(--ds-font-weight-semibold);
}
.prism-active-pill {
  flex: none;
  border: var(--ds-border-width) solid var(--ds-color-brand-100);
  border-radius: var(--ds-radius-full);
  padding: 0 var(--ds-space-1);
  background: var(--ds-color-brand-50);
  color: var(--ds-color-brand-600);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  font-weight: var(--ds-font-weight-medium);
}
.prism-card-tagline {
  display: -webkit-box;
  min-height: calc(var(--ds-line-height-caption) + var(--ds-line-height-caption));
  overflow: hidden;
  color: var(--ds-color-neutral-500);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.prism-card-swatches { padding-top: var(--ds-space-1); }
.prism-fav {
  position: absolute;
  top: var(--ds-space-2);
  right: var(--ds-space-2);
  z-index: 1;
  display: grid;
  place-items: center;
  width: var(--ds-space-8);
  height: var(--ds-space-8);
  padding: 0;
  border: var(--ds-border-width) solid var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-full);
  background: color-mix(in srgb, var(--ds-color-neutral-0) 84%, transparent);
  color: var(--ds-color-neutral-500);
  box-shadow: var(--ds-shadow-sm);
  cursor: pointer;
}
.prism-fav:hover { color: var(--ds-color-warning); }
.prism-fav.is-on {
  color: var(--ds-color-warning);
  border-color: color-mix(in srgb, var(--ds-color-warning) 45%, var(--ds-color-neutral-300));
}
.prism-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-space-3);
  padding: var(--ds-space-12) var(--ds-space-6);
  border: var(--ds-border-width) dashed var(--ds-color-neutral-300);
  border-radius: var(--ds-radius-lg);
  background: var(--ds-color-neutral-100);
  color: var(--ds-color-neutral-500);
  text-align: center;
}
.prism-empty-title {
  margin: 0;
  color: var(--ds-color-neutral-900);
  font-size: var(--ds-font-size-body);
  line-height: var(--ds-line-height-body);
  font-weight: var(--ds-font-weight-semibold);
}
.prism-footnote {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2);
  color: var(--ds-color-neutral-400);
  font-size: var(--ds-font-size-caption);
  line-height: var(--ds-line-height-caption);
}
.prism-footnote .prism-icon { color: var(--ds-color-brand-500); }
@media (prefers-reduced-motion: reduce) {
  .prism-card, .prism-seg, .prism-btn { transition: none; }
}
`;

    /* ------------------------------------------------------------------ */
    /* Color utilities                                                    */
    /* ------------------------------------------------------------------ */

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function normalizeHex(value) {
      if (typeof value !== 'string') return null;
      const match = /^#?([0-9a-f]{6})$/i.exec(value.trim());
      return match === null ? null : '#' + match[1].toUpperCase();
    }

    function hexToRgb(hex) {
      const value = normalizeHex(hex) || '#000000';
      return {
        r: parseInt(value.slice(1, 3), 16),
        g: parseInt(value.slice(3, 5), 16),
        b: parseInt(value.slice(5, 7), 16),
      };
    }

    function rgbToHex(r, g, b) {
      const channel = (value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0');
      return '#' + channel(r) + channel(g) + channel(b);
    }

    function mix(left, right, weight) {
      const amount = clamp(Number.isFinite(weight) ? weight : 0.5, 0, 1);
      const a = hexToRgb(left);
      const b = hexToRgb(right);
      return rgbToHex(a.r + (b.r - a.r) * amount, a.g + (b.g - a.g) * amount, a.b + (b.b - a.b) * amount);
    }

    function withAlpha(hex, alpha) {
      const rgb = hexToRgb(hex);
      const value = clamp(Number.isFinite(alpha) ? alpha : 1, 0, 1);
      return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + value.toFixed(3).replace(/0+$/, '').replace(/\.$/, '') + ')';
    }

    function luminance(hex) {
      const rgb = hexToRgb(hex);
      const channel = (value) => {
        const c = value / 255;
        return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
    }

    function contrastRatio(left, right) {
      const a = luminance(left);
      const b = luminance(right);
      return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    }

    function bestInk(background, preferences) {
      const candidates = (preferences || ['#FFFFFF', '#0B1020']).filter((value) => normalizeHex(value) !== null);
      let best = '#FFFFFF';
      let bestRatio = -1;
      for (const candidate of candidates) {
        const ratio = contrastRatio(background, candidate);
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = normalizeHex(candidate);
        }
      }
      return best;
    }

    function saturate(hex, amount) {
      const rgb = hexToRgb(hex);
      const r = rgb.r / 255;
      const g = rgb.g / 255;
      const b = rgb.b / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const delta = max - min;
      let hue = 0;
      let saturation = 0;
      const lightness = (max + min) / 2;
      if (delta !== 0) {
        saturation = delta / (1 - Math.abs(2 * lightness - 1));
        if (max === r) hue = ((g - b) / delta) % 6;
        else if (max === g) hue = (b - r) / delta + 2;
        else hue = (r - g) / delta + 4;
        hue *= 60;
        if (hue < 0) hue += 360;
      }
      saturation = clamp(saturation + amount, 0, 1);
      const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
      const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
      const m = lightness - c / 2;
      let next;
      if (hue < 60) next = [c, x, 0];
      else if (hue < 120) next = [x, c, 0];
      else if (hue < 180) next = [0, c, x];
      else if (hue < 240) next = [0, x, c];
      else if (hue < 300) next = [x, 0, c];
      else next = [c, 0, x];
      return rgbToHex((next[0] + m) * 255, (next[1] + m) * 255, (next[2] + m) * 255);
    }

    function ensureAccentContrast(accent, seed) {
      let candidate = accent;
      for (let step = 0; step < 4; step += 1) {
        if (contrastRatio(candidate, seed.base) >= 3 && contrastRatio(candidate, seed.surface) >= 3) return candidate;
        candidate = mix(candidate, seed.text, 0.18);
      }
      return contrastRatio(candidate, seed.base) >= 3 ? candidate : seed.accent;
    }

    function characterAccent(seed, character) {
      if (character === 'calm') return ensureAccentContrast(mix(seed.accent, seed.base, 0.18), seed);
      if (character === 'electric') return ensureAccentContrast(saturate(seed.accent, 0.12), seed);
      return ensureAccentContrast(seed.accent, seed);
    }

    function minimumContrast(color, backgrounds) {
      return backgrounds.reduce((minimum, background) => Math.min(minimum, contrastRatio(color, background)), Infinity);
    }

    /**
     * Pick a foreground readable on every supplied background. The preferred
     * color keeps its semantic hue when it clears 3:1 everywhere; otherwise the
     * candidate with the best worst-case contrast wins.
     */
    function labelForSurfaces(preferred, backgrounds, alternatives) {
      if (minimumContrast(preferred, backgrounds) >= 3) return preferred;
      let best = preferred;
      let bestScore = minimumContrast(preferred, backgrounds);
      for (const candidate of alternatives) {
        if (normalizeHex(candidate) === null) continue;
        const score = minimumContrast(candidate, backgrounds);
        if (score > bestScore) {
          best = candidate;
          bestScore = score;
        }
      }
      return best;
    }

    /* ------------------------------------------------------------------ */
    /* Token composition                                                  */
    /* ------------------------------------------------------------------ */

    function buildMode(seed, character, customAccent) {
      const accent = ensureAccentContrast(
        normalizeHex(customAccent) || characterAccent(seed, character),
        seed,
      );
      const accentInk = bestInk(accent, [
        seed.accentInk,
        seed.text,
        seed.base,
        '#FFFFFF',
        '#0B1020',
      ]);
      const isDark = luminance(seed.base) < 0.22;
      const warnSurface = mix(seed.base, seed.warning, 0.12);
      const tooltipBg = isDark ? mix(seed.base, seed.text, 0.18) : seed.text;
      const tooltipKeyBg = mix(tooltipBg, '#FFFFFF', 0.18);
      const toastBg = tooltipBg;
      const toastLabel = bestInk(toastBg, [seed.base, seed.text, '#FFFFFF', '#0B1020']);
      const warnLabel = labelForSurfaces(seed.warning, [warnSurface, toastBg], [
        mix(seed.warning, '#FFFFFF', 0.15),
        mix(seed.warning, '#FFFFFF', 0.3),
        mix(seed.warning, seed.text, 0.2),
        mix(seed.warning, seed.text, 0.35),
        '#FFFFFF',
        seed.text,
        '#0B1020',
      ]);

      return {
        '--dsw-alias-bg-base': seed.base,
        '--dsw-alias-bg-layer-1': seed.surface,
        '--dsw-alias-bg-layer-2': seed.surfaceAlt,
        '--dsw-alias-bg-layer-3': mix(seed.surfaceAlt, seed.surface, 0.4),
        '--dsw-alias-bg-overlay': seed.overlay,
        '--dsw-alias-bg-module-platform': mix(seed.base, accent, 0.045),
        '--dsw-alias-bg-mask-1': withAlpha('#000000', isDark ? 0.58 : 0.36),
        '--dsw-alias-bg-mask-2': withAlpha('#000000', isDark ? 0.46 : 0.26),
        '--dsw-alias-bg-mask-3': withAlpha('#000000', isDark ? 0.32 : 0.16),
        '--dsw-alias-bg-mask-photo': withAlpha('#000000', isDark ? 0.5 : 0.34),
        '--dsw-alias-bg-mask-drop': withAlpha(accent, isDark ? 0.16 : 0.12),
        '--dsw-alias-bg-multi-select': mix(seed.base, accent, 0.12),
        '--dsw-alias-bg-document-preview': mix(seed.surface, seed.base, 0.4),
        '--dsw-alias-bg-document-selection': withAlpha(accent, 0.3),
        '--dsw-alias-bg-skeleton': mix(seed.base, seed.text, 0.1),
        '--dsw-alias-border-inverted': withAlpha(seed.base, 0.28),
        '--dsw-alias-border-inverted2': withAlpha(seed.base, 0.16),
        '--dsw-alias-border-l1': mix(seed.base, seed.border, 0.55),
        '--dsw-alias-border-l2': mix(seed.base, seed.border, 0.78),
        '--dsw-alias-border-l2-darkmode-thin': mix(seed.base, seed.border, 0.9),
        '--dsw-alias-border-l3': seed.border,
        '--dsw-alias-border-l4': mix(seed.border, seed.text, 0.16),
        '--dsw-alias-brand-primary': accent,
        '--dsw-alias-brand-primary-invert': mix(accent, seed.text, 0.28),
        '--dsw-alias-brand-primary-new-colorprimary-new-color': accent,
        '--dsw-alias-brand-text': accentInk,
        '--dsw-alias-prism-accent': accent,
        '--dsw-alias-button-contrast-fill': seed.text,
        '--dsw-alias-button-elevated-fill': seed.surface,
        '--dsw-alias-button-floating-fill': seed.overlay,
        '--dsw-alias-button-floating-hover': mix(seed.overlay, seed.text, 0.06),
        '--dsw-alias-button-ghost-active-border': mix(seed.border, accent, 0.35),
        '--dsw-alias-button-ghost-active-fill': withAlpha(accent, 0.1),
        '--dsw-alias-button-ghost-active-hover': withAlpha(accent, 0.16),
        '--dsw-alias-button-info-fill': accent,
        '--dsw-alias-button-info-hover': mix(accent, seed.text, 0.12),
        '--dsw-alias-button-primary-dimmed': mix(accent, seed.base, 0.45),
        '--dsw-alias-button-primary-fill': accent,
        '--dsw-alias-button-primary-hover': character === 'electric' ? mix(accent, '#FFFFFF', 0.12) : mix(accent, seed.text, 0.12),
        '--dsw-alias-button-tool-bar-fill': seed.surface,
        '--dsw-alias-button-tool-bar-fill-invisible': 'transparent',
        '--dsw-alias-button-tool-bar-hover': mix(seed.surface, seed.text, 0.06),
        '--dsw-alias-interactive-bg-active': mix(seed.surface, accent, 0.14),
        '--dsw-alias-interactive-bg-hover': mix(seed.surface, seed.text, 0.06),
        '--dsw-alias-interactive-bg-hover-accent': withAlpha(accent, 0.11),
        '--dsw-alias-interactive-bg-hover-danger': withAlpha(seed.danger, 0.12),
        '--dsw-alias-interactive-bg-hover-solid': mix(seed.base, seed.surface, 0.6),
        '--dsw-alias-label-caption': mix(seed.muted, seed.base, 0.12),
        '--dsw-alias-label-deep-diving': accent,
        '--dsw-alias-label-deep-diving-shimmer': mix(accent, '#FFFFFF', 0.35),
        '--dsw-alias-label-dimmed': mix(seed.text, seed.base, 0.48),
        '--dsw-alias-label-document-preview': seed.text,
        '--dsw-alias-label-primary': seed.text,
        '--dsw-alias-label-primary-bluish': mix(seed.text, accent, 0.22),
        '--dsw-alias-label-primary-dimmed': mix(seed.text, seed.base, 0.34),
        '--dsw-alias-label-primary-foreground': accentInk,
        '--dsw-alias-label-primary-inverted': seed.base,
        '--dsw-alias-label-secondary': seed.muted,
        '--dsw-alias-label-shimmer': isDark ? withAlpha('#FFFFFF', 0.45) : withAlpha('#000000', 0.3),
        '--dsw-alias-label-tertiary': mix(seed.muted, seed.base, 0.28),
        '--dsw-alias-link': mix(accent, seed.text, isDark ? 0.1 : 0.25),
        '--dsw-alias-markdown-citation': withAlpha(accent, 0.1),
        '--dsw-alias-markdown-code-block': mix(seed.surface, seed.text, isDark ? 0.06 : 0.035),
        '--dsw-alias-markdown-code-block-banner': mix(seed.surface, seed.text, 0.08),
        '--dsw-alias-markdown-code-segment-selected': withAlpha(accent, 0.18),
        '--dsw-alias-markdown-code-segment-unselected': withAlpha(seed.text, 0.05),
        '--dsw-alias-markdown-inline-code': mix(seed.surfaceAlt, seed.text, 0.06),
        '--dsw-alias-markdown-placeholder': withAlpha(seed.text, 0.35),
        '--dsw-alias-markdown-tag': withAlpha(accent, 0.13),
        '--dsw-alias-menu-group-header-fill': withAlpha(seed.surface, 0.94),
        '--dsw-alias-menu-icon': mix(seed.text, seed.muted, 0.3),
        '--dsw-alias-onboarding-accent': accent,
        '--dsw-alias-onboarding-card-fill': withAlpha(seed.surface, 0.86),
        '--dsw-alias-onboarding-checkbox-border': seed.border,
        '--dsw-alias-onboarding-secondary-fill': seed.surface,
        '--dsw-alias-scrollbar-bg-l1': mix(seed.base, seed.text, 0.18),
        '--dsw-alias-scrollbar-bg-l2': mix(seed.surface, seed.text, 0.18),
        '--dsw-alias-scrollbar-hover-l1': mix(seed.base, seed.text, 0.32),
        '--dsw-alias-scrollbar-hover-l2': mix(seed.surface, seed.text, 0.3),
        '--dsw-alias-settings-card-fill': mix(seed.surface, seed.base, 0.4),
        '--dsw-alias-settings-card-stroke': mix(seed.border, seed.text, 0.16),
        '--dsw-alias-state-business-primary': accent,
        '--dsw-alias-state-business-tertiary': withAlpha(accent, 0.25),
        '--dsw-alias-state-error-primary': seed.danger,
        '--dsw-alias-state-error-secondary': withAlpha(seed.danger, 0.25),
        '--dsw-alias-state-idle-primary': mix(seed.base, seed.muted, 0.55),
        '--dsw-alias-state-success-primary': seed.success,
        '--dsw-alias-state-success-secondary': withAlpha(seed.success, 0.22),
        '--dsw-alias-state-success-tertiary': withAlpha(seed.success, 0.12),
        '--dsw-alias-state-warn-label': warnLabel,
        '--dsw-alias-state-warn-primary': seed.warning,
        '--dsw-alias-state-warn-secondary': withAlpha(seed.warning, 0.22),
        '--dsw-alias-state-warn-tertiary': warnSurface,
        '--dsw-alias-switch-thumb': isDark ? mix(seed.text, seed.base, 0.25) : '#FFFFFF',
        '--dsw-alias-toast-bg': toastBg,
        '--dsw-alias-toast-label': toastLabel,
        '--dsw-alias-tooltip-bg': tooltipBg,
        '--dsw-alias-tooltip-key-bg': tooltipKeyBg,
        '--dsw-alias-turn-trigger-bg': mix(seed.base, accent, 0.05),
        '--dsw-alias-turn-trigger-bg-hover': mix(seed.base, accent, 0.09),
        '--dsw-alias-code-diff-added': seed.success,
        '--dsw-alias-code-diff-deleted': seed.danger,
        '--dsw-alias-file-diff-added-bg': withAlpha(seed.success, 0.12),
        '--dsw-alias-file-diff-added-gutter': withAlpha(seed.success, 0.18),
        '--dsw-alias-file-diff-added-marker': seed.success,
        '--dsw-alias-file-diff-deleted-bg': withAlpha(seed.danger, 0.12),
        '--dsw-alias-file-diff-deleted-gutter': withAlpha(seed.danger, 0.18),
        '--dsw-alias-file-diff-deleted-marker': seed.danger,
        '--dsw-specific-sidebar-fill': seed.sidebar,
      };
    }

    function buildThemeTokens(theme, character, customAccent) {
      const light = buildMode(theme.light, character, customAccent);
      const dark = buildMode(theme.dark, character, customAccent);
      const tokens = {};
      const names = new Set([...Object.keys(light), ...Object.keys(dark)]);
      for (const name of names) {
        tokens[name] = {
          light: light[name] || light['--dsw-alias-bg-base'],
          dark: dark[name] || dark['--dsw-alias-bg-base'],
        };
      }
      return tokens;
    }

    /* ------------------------------------------------------------------ */
    /* Persistence and engine                                             */
    /* ------------------------------------------------------------------ */

    function readPreferences() {
      try {
        if (typeof localStorage === 'undefined') return null;
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return null;
        return parsed;
      } catch (error) {
        return null;
      }
    }

    function writePreferences(preferences) {
      try {
        if (typeof localStorage === 'undefined') return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      } catch (error) {
        /* A private browser or full quota must not break theme application. */
      }
    }

    function sanitizePreferences(raw, defaultThemeId) {
      const source = raw && typeof raw === 'object' ? raw : {};
      const themeId = source.themeId === 'native' || THEME_BY_ID.has(source.themeId)
        ? source.themeId
        : defaultThemeId;
      const character = CHARACTERS.includes(source.character) ? source.character : 'signature';
      const accent = normalizeHex(source.accent);
      const favorites = Array.isArray(source.favorites)
        ? source.favorites.filter((id) => THEME_BY_ID.has(id))
        : [];
      return {
        themeId,
        character,
        accent,
        favorites: [...new Set(favorites)],
      };
    }

    function createEngine(themeService) {
      const live = themeService.getTheme();
      const defaultThemeId = live.active.colorScheme === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
      let preferences = sanitizePreferences(readPreferences(), defaultThemeId);
      let snapshot = null;
      let overrideDispose = null;
      let disposed = false;
      const listeners = new Set();

      function buildSnapshot() {
        const current = themeService.getTheme();
        const activeTheme = preferences.themeId === 'native'
          ? null
          : THEME_BY_ID.get(preferences.themeId) || null;
        return Object.freeze({
          themeId: preferences.themeId,
          character: preferences.character,
          accent: preferences.accent,
          favorites: Object.freeze([...preferences.favorites]),
          activeTheme,
          activeScheme: current.active.colorScheme,
          preference: current.preference,
          themeCount: THEMES.length,
        });
      }

      function publish() {
        snapshot = buildSnapshot();
        for (const listener of [...listeners]) {
          try {
            listener();
          } catch (error) {
            /* A broken subscriber must not stop the theme service. */
          }
        }
      }

      function persist() {
        writePreferences({
          themeId: preferences.themeId,
          character: preferences.character,
          accent: preferences.accent,
          favorites: preferences.favorites,
        });
      }

      function disposeOverride() {
        if (typeof overrideDispose === 'function') {
          const dispose = overrideDispose;
          overrideDispose = null;
          dispose();
        }
      }

      function applyOverride() {
        disposeOverride();
        if (preferences.themeId === 'native') return;
        const theme = THEME_BY_ID.get(preferences.themeId);
        if (!theme) return;
        overrideDispose = themeService.overrideTokens(
          SOURCE,
          buildThemeTokens(theme, preferences.character, preferences.accent),
        );
      }

      function update(next) {
        preferences = { ...preferences, ...next };
        persist();
        applyOverride();
        publish();
      }

      const engine = {
        subscribe(listener) {
          if (typeof listener !== 'function') return () => {};
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
        getSnapshot() {
          if (snapshot === null) snapshot = buildSnapshot();
          return snapshot;
        },
        mount() {
          disposed = false;
          applyOverride();
          snapshot = buildSnapshot();
        },
        dispose() {
          disposed = true;
          disposeOverride();
          listeners.clear();
        },
        syncTheme() {
          if (disposed) return;
          publish();
        },
        setTheme(themeId) {
          if (themeId !== 'native' && !THEME_BY_ID.has(themeId)) return;
          if (themeId === preferences.themeId) return;
          update({ themeId, accent: null });
        },
        setCharacter(character) {
          if (!CHARACTERS.includes(character) || character === preferences.character) return;
          update({ character });
        },
        setAccent(value) {
          const accent = normalizeHex(value);
          if (accent === null || accent === preferences.accent) return;
          update({ accent });
        },
        clearAccent() {
          if (preferences.accent === null) return;
          update({ accent: null });
        },
        setScheme(scheme) {
          if (!SCHEMES.includes(scheme)) return;
          themeService.setTheme(scheme);
        },
        toggleFavorite(themeId) {
          if (!THEME_BY_ID.has(themeId)) return;
          const favorites = preferences.favorites.includes(themeId)
            ? preferences.favorites.filter((id) => id !== themeId)
            : [...preferences.favorites, themeId];
          update({ favorites });
        },
        surprise() {
          const pool = THEMES.filter((theme) => theme.id !== preferences.themeId);
          const source = pool.length > 0 ? pool : THEMES;
          const theme = source[Math.floor(Math.random() * source.length)];
          if (theme) engine.setTheme(theme.id);
        },
      };

      snapshot = buildSnapshot();
      persist();
      return engine;
    }

    /* ------------------------------------------------------------------ */
    /* Icons                                                              */
    /* ------------------------------------------------------------------ */

    function IconStar(props) {
      return h('svg', {
        className: 'prism-icon',
        viewBox: '0 0 16 16',
        fill: props.filled ? 'currentColor' : 'none',
        stroke: 'currentColor',
        strokeWidth: 1.25,
        strokeLinejoin: 'round',
        'aria-hidden': true,
      }, h('path', { d: 'M8 1.7 9.83 5.4l4.07.6-2.95 2.87.7 4.06L8 11.01l-3.65 1.92.7-4.06L2.1 6l4.07-.6L8 1.7Z' }));
    }

    function IconShuffle() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M2 5h2.1c1.2 0 2.1.6 2.8 1.7l1.7 2.6c.7 1.1 1.6 1.7 2.8 1.7H14' }),
        h('path', { d: 'm12 8.5 2 2.5-2 2.5' }),
        h('path', { d: 'M2 11h2.1c1.2 0 2.1-.6 2.8-1.7l.9-1.4' }),
        h('path', { d: 'M2 5h2.1c1 0 1.8.4 2.5 1.2M14 5H9.7c-1 0-1.8.4-2.5 1.2' }),
        h('path', { d: 'm12 2.5 2 2.5-2 2.5' }),
      );
    }

    function IconReset() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M3 8a5 5 0 1 0 1.5-3.6L2 7' }),
        h('path', { d: 'M2 3v4h4' }),
      );
    }

    function IconDownload() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M8 2v7' }),
        h('path', { d: 'm5 6 3 3 3-3' }),
        h('path', { d: 'M2.5 10.5v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2' }),
      );
    }

    function IconSearch() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', 'aria-hidden': true },
        h('circle', { cx: 7, cy: 7, r: 4.2 }),
        h('path', { d: 'm10.2 10.2 3 3' }),
      );
    }

    function IconPalette() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'M8 1.8a6.2 6.2 0 1 0 0 12.4c.9 0 1.4-.7 1.4-1.4 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-.9 0-.6.5-1.1 1.1-1.1h1.1c2 0 3.2-1.1 3.2-3.1C14 3.8 11.2 1.8 8 1.8Z' }),
        h('circle', { cx: 5.2, cy: 6, r: 0.8, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 8, cy: 4.4, r: 0.8, fill: 'currentColor', stroke: 'none' }),
        h('circle', { cx: 10.8, cy: 6, r: 0.8, fill: 'currentColor', stroke: 'none' }),
      );
    }

    function IconCheck() {
      return h('svg', { className: 'prism-icon', viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
        h('path', { d: 'm3.5 8.5 3 3 6-7' }),
      );
    }

    /* ------------------------------------------------------------------ */
    /* Studio UI                                                          */
    /* ------------------------------------------------------------------ */

    let engine = null;

    function getDefaultTranslate() {
      return (key) => EN[key] || key;
    }

    function useEngineSnapshot() {
      const [current, setCurrent] = React.useState(() => engine.getSnapshot());
      React.useEffect(() => engine.subscribe(() => setCurrent(engine.getSnapshot())), []);
      return current;
    }

    function SwatchRow(props) {
      return h('div', { className: 'prism-swatches ' + (props.className || '') },
        props.colors.map((color, index) => h('span', {
          key: index,
          className: 'prism-swatch',
          style: { background: color },
          title: props.labels ? props.labels[index] : undefined,
          'aria-hidden': true,
        })),
      );
    }

    function Hero(props) {
      const { snapshot, t } = props;
      const palette = snapshot.activeTheme ? snapshot.activeTheme[snapshot.activeScheme] : null;
      const fallbackColors = [
        'var(--dsw-alias-bg-base)',
        'var(--dsw-alias-bg-layer-1)',
        'var(--dsw-alias-brand-primary)',
        'var(--dsw-alias-label-primary)',
        'var(--dsw-alias-label-secondary)',
        'var(--dsw-specific-sidebar-fill)',
      ];
      const colors = palette ? SWATCH_KEYS.map((key) => palette[key]) : fallbackColors;
      return h('section', { className: 'prism-hero' },
        h('div', { className: 'prism-hero-copy' },
          h('div', { className: 'prism-eyebrow' }, t('hero.eyebrow')),
          h('h2', { className: 'prism-title' }, t('hero.title')),
          h('p', { className: 'prism-subtitle' }, t('hero.subtitle')),
        ),
        h('div', { className: 'prism-current' },
          h('div', { className: 'prism-current-head' },
            h('span', { className: 'prism-current-kicker' }, t('hero.current')),
            h('span', { className: 'prism-current-scheme' }, t('scheme.' + snapshot.activeScheme)),
          ),
          h('div', { className: 'prism-current-name' }, snapshot.activeTheme ? snapshot.activeTheme.name : t('native.name')),
          h(SwatchRow, { colors }),
        ),
      );
    }

    function SegmentedControl(props) {
      return h('div', { className: 'prism-segmented', role: 'group', 'aria-label': props.label },
        props.options.map((option) => h('button', {
          key: option.id,
          type: 'button',
          className: 'prism-seg',
          'aria-pressed': props.value === option.id,
          onClick: () => props.onChange(option.id),
        }, props.labelFor(option.id))),
      );
    }

    function Controls(props) {
      const { snapshot, t } = props;
      const palette = snapshot.activeTheme ? snapshot.activeTheme[snapshot.activeScheme] : null;
      const accentValue = snapshot.accent || (palette ? palette.accent : '#3B82F6');
      const accentDisabled = snapshot.activeTheme === null;
      return h('section', { className: 'prism-panel' },
        h('div', { className: 'prism-controls' },
          h('div', { className: 'prism-field' },
            h('div', { className: 'prism-field-label' }, t('scheme.label')),
            h(SegmentedControl, {
              label: t('scheme.label'),
              value: snapshot.preference,
              options: SCHEMES.map((id) => ({ id })),
              labelFor: (id) => t('scheme.' + id),
              onChange: (id) => engine.setScheme(id),
            }),
          ),
          h('div', { className: 'prism-field' },
            h('div', { className: 'prism-field-label' }, t('character.label')),
            h(SegmentedControl, {
              label: t('character.label'),
              value: snapshot.character,
              options: CHARACTERS.map((id) => ({ id })),
              labelFor: (id) => t('character.' + id),
              onChange: (id) => engine.setCharacter(id),
            }),
          ),
          h('div', { className: 'prism-field' },
            h('div', { className: 'prism-field-label' }, t('accent.label')),
            h('div', { className: 'prism-accent-row' },
              h('label', { className: 'prism-accent-swatch', style: { background: accentValue }, title: t('accent.label') },
                h('input', {
                  type: 'color',
                  value: accentValue,
                  disabled: accentDisabled,
                  'aria-label': t('accent.label'),
                  onChange: (event) => engine.setAccent(event.target.value),
                }),
              ),
              h('code', { className: 'prism-accent-value' }, accentValue),
              !accentDisabled && snapshot.accent !== null
                ? h('button', { type: 'button', className: 'prism-text-btn', onClick: () => engine.clearAccent() }, t('accent.reset'))
                : null,
            ),
            accentDisabled ? h('div', { className: 'prism-hint' }, t('accent.native')) : null,
          ),
          h('div', { className: 'prism-actions' },
            h('button', { type: 'button', className: 'prism-btn prism-btn-primary', onClick: () => engine.surprise() },
              h(IconShuffle), t('action.surprise'),
            ),
            h('button', {
              type: 'button',
              className: 'prism-btn prism-btn-ghost' + (snapshot.themeId === 'native' ? ' is-active' : ''),
              'aria-pressed': snapshot.themeId === 'native',
              onClick: () => engine.setTheme('native'),
            }, h(IconReset), t('action.native')),
            h('button', {
              type: 'button',
              className: 'prism-btn prism-btn-ghost',
              disabled: snapshot.activeTheme === null,
              onClick: () => props.onExport(snapshot),
            }, h(IconDownload), t('action.export')),
          ),
        ),
      );
    }

    function FilterBar(props) {
      const { t, query, onQuery, family, onFamily, favoritesOnly, onFavoritesOnly, favoriteCount, visibleCount } = props;
      return h(React.Fragment, null,
        h('div', { className: 'prism-filterbar' },
          h('label', { className: 'prism-search' },
            h(IconSearch),
            h('span', { className: 'prism-sr-only' }, t('search.label')),
            h('input', {
              type: 'search',
              value: query,
              placeholder: t('search.placeholder'),
              'aria-label': t('search.label'),
              onChange: (event) => onQuery(event.target.value),
            }),
          ),
          h('div', { className: 'prism-families', role: 'group', 'aria-label': t('family.group') },
            FAMILIES.map((entry) => h('button', {
              key: entry.id,
              type: 'button',
              className: 'prism-family',
              'aria-pressed': family === entry.id,
              onClick: () => onFamily(entry.id),
            }, t(entry.labelKey))),
          ),
          h('button', {
            type: 'button',
            className: 'prism-btn prism-btn-ghost prism-favorites-toggle' + (favoritesOnly ? ' is-active' : ''),
            'aria-pressed': favoritesOnly,
            onClick: () => onFavoritesOnly(!favoritesOnly),
          }, h(IconStar, { filled: favoritesOnly }), t('favorites.only') + ' · ' + favoriteCount),
        ),
        h('div', { className: 'prism-gallery-meta' },
          h('span', null, visibleCount + ' ' + t('gallery.count')),
          h('span', null, t('gallery.hint')),
        ),
      );
    }

    function ThemePreview(props) {
      const p = props.palette;
      return h('div', {
        className: 'prism-preview',
        style: {
          '--p-base': p.base,
          '--p-surface': p.surface,
          '--p-sidebar': p.sidebar,
          '--p-text': p.text,
          '--p-muted': p.muted,
          '--p-accent': p.accent,
          '--p-ink': p.accentInk,
          '--p-border': p.border,
        },
      },
        h('div', { className: 'prism-preview-chrome' },
          h('span', { className: 'prism-preview-dot' }),
          h('span', { className: 'prism-preview-dot' }),
          h('span', { className: 'prism-preview-dot' }),
          h('span', { className: 'prism-preview-address' }),
        ),
        h('div', { className: 'prism-preview-body' },
          h('div', { className: 'prism-preview-rail' },
            h('span', { className: 'prism-preview-logo' }),
            h('span', { className: 'prism-preview-line' }),
            h('span', { className: 'prism-preview-line' }),
            h('span', { className: 'prism-preview-line' }),
          ),
          h('div', { className: 'prism-preview-main' },
            h('span', { className: 'prism-preview-title' }),
            h('span', { className: 'prism-preview-copy' }),
            h('span', { className: 'prism-preview-copy is-short' }),
            h('span', { className: 'prism-preview-pill' }),
          ),
        ),
      );
    }

    function ThemeCard(props) {
      const { theme, snapshot, t } = props;
      const palette = theme[snapshot.activeScheme];
      const active = snapshot.themeId === theme.id;
      const favorite = snapshot.favorites.includes(theme.id);
      return h('div', { className: 'prism-card-wrap' },
        h('button', {
          type: 'button',
          className: 'prism-card' + (active ? ' is-active' : ''),
          'aria-pressed': active,
          onClick: () => engine.setTheme(theme.id),
        },
          h(ThemePreview, { palette }),
          h('div', { className: 'prism-card-body' },
            h('div', { className: 'prism-card-eyebrow' }, t('family.' + theme.family)),
            h('div', { className: 'prism-card-name' },
              theme.name,
              active ? h('span', { className: 'prism-active-pill' }, t('gallery.active')) : null,
            ),
            h('div', { className: 'prism-card-tagline' }, theme.tagline),
            h(SwatchRow, {
              colors: SWATCH_KEYS.slice(0, 5).map((key) => palette[key]),
              className: 'prism-card-swatches',
            }),
          ),
        ),
        h('button', {
          type: 'button',
          className: 'prism-fav' + (favorite ? ' is-on' : ''),
          'aria-pressed': favorite,
          'aria-label': (favorite ? t('gallery.unfavorite') : t('gallery.favorite')) + ': ' + theme.name,
          onClick: (event) => {
            event.stopPropagation();
            engine.toggleFavorite(theme.id);
          },
        }, h(IconStar, { filled: favorite })),
      );
    }

    function Gallery(props) {
      const { snapshot, t, query, family, favoritesOnly } = props;
      const normalized = query.trim().toLowerCase();
      const visible = THEMES.filter((theme) => {
        if (family !== 'all' && theme.family !== family) return false;
        if (favoritesOnly && !snapshot.favorites.includes(theme.id)) return false;
        if (!normalized) return true;
        return (theme.name + ' ' + theme.tagline + ' ' + theme.family).toLowerCase().includes(normalized);
      });
      return h('section', { className: 'prism-gallery', 'aria-live': 'polite' },
        visible.length === 0
          ? h('div', { className: 'prism-empty', style: { gridColumn: '1 / -1' } },
            h('p', { className: 'prism-empty-title' }, t('gallery.empty')),
            h('button', { type: 'button', className: 'prism-btn', onClick: props.onClear }, t('gallery.clear')),
          )
          : visible.map((theme) => h(ThemeCard, { key: theme.id, theme, snapshot, t })),
      );
    }

    function downloadTheme(snapshot) {
      const theme = snapshot.activeTheme;
      if (!theme) return;
      const payload = {
        schema: 'dsh-prism-theme/v1',
        exportedAt: new Date().toISOString(),
        id: theme.id,
        name: theme.name,
        family: theme.family,
        tagline: theme.tagline,
        scheme: snapshot.activeScheme,
        character: snapshot.character,
        accentOverride: snapshot.accent,
        palette: theme[snapshot.activeScheme],
        tokens: buildThemeTokens(theme, snapshot.character, snapshot.accent),
      };
      try {
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'prism-' + theme.id + '-' + snapshot.activeScheme + '.json';
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (error) {
        /* Export is a convenience; a blocked download must not break the studio. */
      }
    }

    function PrismStudio(props) {
      const t = typeof props.t === 'function' ? props.t : getDefaultTranslate();
      const snapshot = useEngineSnapshot();
      const [query, setQuery] = React.useState('');
      const [family, setFamily] = React.useState('all');
      const [favoritesOnly, setFavoritesOnly] = React.useState(false);
      const visibleCount = THEMES.filter((theme) => {
        if (family !== 'all' && theme.family !== family) return false;
        if (favoritesOnly && !snapshot.favorites.includes(theme.id)) return false;
        if (!query.trim()) return true;
        const normalized = query.trim().toLowerCase();
        return (theme.name + ' ' + theme.tagline + ' ' + theme.family).toLowerCase().includes(normalized);
      }).length;

      return h('div', { className: 'prism-root' },
        h('style', { key: 'prism-styles' }, CSS),
        h(Hero, { snapshot, t }),
        h(Controls, { snapshot, t, onExport: downloadTheme }),
        h('section', { className: 'prism-panel' },
          h(FilterBar, {
            t,
            query,
            onQuery: setQuery,
            family,
            onFamily: setFamily,
            favoritesOnly,
            onFavoritesOnly: setFavoritesOnly,
            favoriteCount: snapshot.favorites.length,
            visibleCount,
          }),
          h(Gallery, {
            snapshot,
            t,
            query,
            family,
            favoritesOnly,
            onClear: () => {
              setQuery('');
              setFamily('all');
              setFavoritesOnly(false);
            },
          }),
        ),
        h('div', { className: 'prism-footnote' },
          h(IconPalette),
          h('span', null, snapshot.themeId === 'native' ? t('footer.native') : t('footer.note')),
        ),
      );
    }

    /* ------------------------------------------------------------------ */
    /* Plugin body                                                        */
    /* ------------------------------------------------------------------ */

    const inject = ['theme', 'slots', 'locale'];

    function apply(ctx) {
      const themeService = ctx.theme;
      const t = ctx.locale.bind(NS);
      ctx.effect(() => ctx.locale.register(NS, { en: EN, zh: ZH }), 'prism: locale dictionaries');
      ctx.effect(() => ctx.on('theme/change', () => {
        if (engine !== null) engine.syncTheme();
      }), 'prism: live theme sync');
      engine = createEngine(themeService);
      ctx.effect(() => {
        engine.mount();
        return () => engine.dispose();
      }, 'prism: palette override layer');
      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: PACKAGE_ID,
        order: 60,
        label: () => t('nav.label'),
        locale: NS,
      }, PrismStudio));
    }

    return {
      inject,
      apply,
      __test: {
        PACKAGE_ID,
        SOURCE,
        NS,
        STORAGE_KEY,
        CHARACTERS,
        SCHEMES,
        FAMILIES,
        THEMES,
        THEME_BY_ID,
        EN,
        ZH,
        CSS,
        buildMode,
        buildThemeTokens,
        createEngine,
        normalizeHex,
        contrastRatio,
        bestInk,
        characterAccent,
        ensureAccentContrast,
      },
    };
  },
});
