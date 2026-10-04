# Piano Practice

Implementation includes /scales and /sight-reading, the 2021 LCM Grade 5 requested scale families, right/left fingering, keyboard shapes and thumb-crossing curves, ascending/descending melodic minor diagrams, sampled grand-piano playback, six sight-reading levels, manually generated four-bar sets, D1-backed per-user history, count-in, beat cursor, metronome and answer playback.

## Verification

All authored TypeScript/TSX files passed TypeScript syntax transpilation. Generator checks passed for all six levels with 1, 8 and 30 sheets: correct sheet counts, clef alternation, finite pitches and exactly four beats per bar. Scale interval and fingering-array checks passed.

Full dependency installation, type checking, browser verification and deployment remain unverified. The environment cannot resolve registry.npmjs.org or git.chatgpt-team.site. Offline installation lacks zod-validation-error 4.0.2. The registered Site is private and unpublished.

## Finish in a network-enabled environment

Use Node 22.13 or later and the Sites plugin workflow. Install dependencies using the bundled install-dependencies helper; run npm run db:generate and inspect the generated migration for db/schema.ts before building. The manifest already declares the DB binding and registered project ID. Use the existing Site; do not register another one. Obtain a fresh source repository credential and continue the Sites build/publish workflow.

Piano samples load on demand from gleitz.github.io (FluidR3_GM acoustic grand piano). External sample and Google Fonts access require connectivity. Audio failures show a retryable error. No microphone detection is implemented.
