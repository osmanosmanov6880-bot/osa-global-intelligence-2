# OSA — Beyond the Model: Interactive Experience

Route: `/experience`

## What is implemented
- Three connected chapters with nine scenes.
- Branching choice points; each selection changes the explanation shown immediately.
- Scene navigation drawer and previous/next controls.
- Local-device progress and choices saved in localStorage; the experience remains usable if storage is blocked.
- Keyboard navigation: Left/Right arrows between scenes and M to toggle the scene map.
- Responsive layout and `prefers-reduced-motion` support.
- No autoplay audio and no pretend video controls: this release is an interactive web narrative, not an MP4 film.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000/experience`.

## Editorial note
The scenes use conceptual CSS visuals rather than documentary footage. Factual language is intentionally qualified: a model's performance on a task does not establish consciousness or general reliability. Before a public course launch, add a reviewed bibliography with dated primary sources and commission narration/audio as separate assets.

## Validation status
Files were committed through the GitHub contents API. This is not the same as a local build: typecheck, lint, automated browser testing, and production build must run in a checkout with npm dependencies available.
