# Deployment runbook

## Local run

1. Install Node.js 20 or 22.
2. Clone this repository and run `npm install`.
3. Run `npm run dev` and open the local URL printed by Next.js.
4. Run `npm run verify` before deploying.

## Vercel

Import `osmanosmanov6880-bot/osa-global-intelligence-2` into Vercel. Framework preset: Next.js. Build command: `npm run build`; install command: `npm install`; output directory: leave the Next.js default. No API keys are required for the current front-end prototype. Set the production domain before relying on canonical URLs in `app/sitemap.ts` and `app/robots.ts`.

## Current capability boundaries

- Interactive course: implemented in the browser.
- Branching feedback: implemented in React state.
- Progress: stored in localStorage on the current browser/device only.
- Health endpoint: `/api/health` returns application metadata; it does not prove database or upstream-provider health.
- Video/audio: not bundled. The interface is a cinematic web experience, not a rendered film.
- Auth, payments, Supabase persistence and automated news ingestion: not wired in this repository snapshot.

## Release checklist

- [ ] GitHub Actions passes typecheck, contract tests, lint and production build.
- [ ] Mobile widths 320, 375, 390 and 430 px tested.
- [ ] Keyboard-only navigation tested.
- [ ] Reduced-motion mode tested.
- [ ] Canonical domain and metadata reviewed.
- [ ] Health endpoint checked after deployment.
- [ ] No credentials or private content committed.
