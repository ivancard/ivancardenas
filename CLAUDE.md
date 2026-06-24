# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # production build → dist/
npm run preview   # serve the dist/ build locally
```

No test runner is configured.

## Architecture

Single-page portfolio. No router — sections are linked via anchor `#id`. The app is flat: `main.jsx` renders all sections in order with no nesting beyond `LanguageProvider`.

```
main.jsx
└── LanguageProvider
    ├── HeaderNav   (#header)
    ├── AboutMe     (#sobreMi)
    ├── Projects    (#proyectos)
    ├── Contact     (#contacto)
    ├── MiFooter
    └── ScrollToTop
```

### Data layer (`src/data/`)

All content lives in plain JS files — no CMS, no API calls:

- `dataSkills.js` — skills array for the About Me grid
- `dataProjectsIOS.js` / `dataProjectsWeb.js` — project arrays, each with `category: 'ios'|'web'`; merged at runtime in `Projects.jsx` as `allProjects`
- `dataMoreAboutMe.js` — photo array for the About Me modal Swiper carousel
- `translations.js` — bilingual strings (`es`/`en`) for every UI label

### i18n

`LanguageContext` provides `{ lang, toggleLang }`. Every component that renders text does:

```jsx
const { lang } = useLanguage();
const t = translations[lang];
// then uses t.section.key
```

Adding new UI copy requires updating **both** `es` and `en` blocks in `translations.js`.

### Theming (dark mode)

Dark mode is stored as local state in `HeaderNav` and applied by setting `data-theme="dark"` on `document.documentElement`. There is no persistence (resets on reload).

### Color tokens

All colors are CSS custom properties defined in `src/index.css` under `:root` (light) and `[data-theme='dark']`. SCSS files use `var(--bg-dark)`, `var(--text-primary)`, etc. The only SCSS variable is `$radious: 10px` in `src/_colors.scss`, imported by each SCSS module.

### Animations

Framer Motion is used throughout:

- **Nav/Hero entry**: `initial/animate` on `motion.nav` and `motion.div` in `HeaderNav`
- **Scroll entrance**: `whileInView` + `viewport={{ once: true }}` on `motion.section`/`motion.footer`/`motion.div`
- **Skill stagger**: `Skill` receives an `index` prop and uses `delay: index * 0.06`
- **Project filter**: `AnimatePresence mode='wait'` wraps the filtered list; each card uses `initial/animate/exit` with `scale`
- **Modals**: wrapped in `AnimatePresence` at the call site so exit animations play on unmount

**Important — CSS stacking context gotcha**: Framer Motion creates a stacking context on an element while `transform` is non-identity or `opacity < 1` (i.e., during animation). Any child with `z-index: -1` will be painted relative to that element's context, not the root — making it visible against the element's transparent background. Use `display: none` instead of `z-index: -1` for elements that should be permanently hidden.

### Modal system

`Modal` renders via `ReactDOM.createPortal` into `document.body`. It traps focus on the close button, listens for `Escape`, and locks `body` scroll while open. Call sites wrap `<Modal>` in `<AnimatePresence>` to enable exit animations.

### Project data shape and image naming

Each project object in `dataProjectsWeb.js` / `dataProjectsIOS.js` has:

| Field | Type | Description |
|---|---|---|
| `img` | import | Thumbnail shown in the grid |
| `imgHigh` | import \| null | High-res version opened in the modal |
| `imgPhone` | import \| null | iOS only — animated GIF shown in phone mockup |
| `imgExtra` | import[] | Additional gallery images shown in the modal |
| `parrafs` | string[] | Extra paragraphs rendered in the modal body |
| `videoUrl` | string \| null | YouTube link shown as "Demo video" in the modal |
| `repository` | string \| null | GitHub URL |
| `site` | string \| null | Live site URL |

**Asset naming conventions in `src/assets/`:**

Web projects:
- `project-{n}-low.jpg` — low-res thumbnail → `img`
- `project-{n}.jpg` — high-res → `imgHigh`
- `project-{n}-{x}.jpg` — extra gallery images → `imgExtra`

iOS projects:
- `ios-{n}.jpg` / `ios-{n}.png` — static screenshot → `img`
- `iosGif{n}.gif` — animated GIF demo → `imgPhone`
- `iosProject{n}.png` — extra/high-res screenshot → `imgExtra` or `imgHigh`

When adding a new project, follow the next sequential number for the category (`project-7-low.jpg` for the 7th web project, `ios-14.jpg` + `iosGif14.gif` for the 14th iOS project).

### Styling

Each component has a matching SCSS file in `src/scss/`. Global reset and font are in `src/index.css`. Base font is `Roboto Mono` (monospace), `font-size: 62.5%` on `html` so `1rem = 10px`.
