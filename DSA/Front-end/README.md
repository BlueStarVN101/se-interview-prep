# Frontend Interview Practice Sandbox

Local JavaScript practice exercises generated from [FE-interview.md](./FE-interview.md). Each question lives in its own folder with a README, starter `index.js`, and Vitest tests.

## Quick start

```bash
npm install
npm test
```

## Run tests

| Command | Description |
|--------|-------------|
| `npm install` | Install dependencies (once) |
| `npm test` | Run all exercise tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:exercise -- js-functions/mean` | Run one exercise |
| `npm run generate` | Regenerate missing stubs from `FE-interview.md` (skips existing files) |

## Project structure

```
Front-end/
├── FE-interview.md          # Source question list
├── package.json
├── vitest.config.js
├── scripts/
│   ├── generate-exercises.js
│   └── run-exercise.js
└── exercises/
    ├── js-functions/        # ~112 exercises
    │   ├── mean/
    │   │   ├── README.md
    │   │   ├── index.js
    │   │   └── index.test.js
    │   ├── debounce/
    │   └── ...
    ├── ui-coding/           # ~40 exercises (tests skipped until you implement)
    └── algo-coding/         # ~86 exercises
```

Each exercise folder is independent — do not import code from other exercises.

## Sample exercises (fully documented)

- **Easy:** [exercises/js-functions/mean](./exercises/js-functions/mean/) — average of an array
- **Medium:** [exercises/js-functions/debounce](./exercises/js-functions/debounce/) — delay execution until calls stop

Implement solutions in `index.js`. Tests fail with `Not implemented` until you complete the TODO.

## Sync stubs and tests from README

Regenerate `index.js` and `index.test.js` to match each folder’s README:

```bash
npm run sync-exercises
```

## README documentation

Exercise READMEs follow an interview-oriented structure (overview, requirements, examples, hints, and UI interaction notes). Regenerate or refresh them from `FE-interview.md` with:

```bash
npm run enrich-readmes
```

## Adding new questions

1. Add entries to `FE-interview.md` under the right `##` section.
2. Run `npm run generate`.
3. Edit the new folder’s `index.test.js` with real test cases if the generator placeholder is not enough.

## Notes

- **Pure JS / algo:** runnable in Node with Vitest (no browser).
- **UI coding:** folders and READMEs are generated; Vitest tests are `describe.skip` placeholders — add React/DOM tooling locally if you want automated UI tests.
- **React hooks** (e.g. `useCounter`): implement in `index.js` using your preferred pattern; extend tests when ready.
