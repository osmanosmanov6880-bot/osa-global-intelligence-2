# Development and contribution

## Local setup

Use Node.js 20 or 22 and npm. Run `npm install`, then `npm run dev`. Before proposing changes run `npm run verify`.

## Product principles

- Preserve the OSA dark premium design language and mobile-first readability.
- No fake testimonials, unverifiable performance statistics, or fictional research citations.
- Interactive choices must have real state effects and feedback.
- Do not represent CSS scenes as finished video or generated art as documentary footage.
- Keep credentials server-side; never commit `.env.local`, service-role keys, or provider tokens.
- Respect reduced-motion preferences and keyboard focus.

## Scope boundary

This repository currently implements a front-end interactive-course prototype. Authentication, database-backed progress, video rendering, payments and a production research-ingestion engine require separate integration and validation.
