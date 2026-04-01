# CLAUDE.md — Colorum

Colorum is a TypeScript color utility library with zero runtime dependencies, built with TSDX. It provides functions for color conversion, validation, manipulation, and generation.

---

## Commands

```sh
npm test                  # Run all tests
npm run build             # Build to /dist
npm run lint              # Lint with auto-fix
npm run lint:check        # Strict lint (no warnings allowed)
npm run format            # Format with Prettier
npm run bin/new-feature   # Scaffold a new core function and test
npm run bin/new-branch    # Create a branch following the naming convention
```

---

## Project Structure

```text
src/
├── index.ts                  # Public entry point — re-exports everything from core
├── constants/
│   ├── hexColor.ts           # Hex-related constants (prefix, lengths, positions, base)
│   └── rgbColor.ts           # RGB-related constants (min, max, CSS prefixes)
├── core/
│   ├── conversions/          # Convert between color formats
│   ├── generators/           # Generate colors (random or derived)
│   ├── manipulators/         # Receive color(s), return different color(s)
│   ├── utilities/            # Color helpers that don't transform the color itself
│   └── validators/           # Validate whether a value is a valid color format
├── helpers/                  # Generic internal utilities, not color-specific
└── types/                    # Shared TypeScript type definitions — structure TBD
test/
└── core/                     # Mirrors src/core structure
docs/
└── git-conventions.md        # Branch and commit naming rules
bin/
├── new-feature.js            # CLI scaffold for new functions and tests
└── new-branch.js             # CLI for creating branches with the correct naming format
```

---

## Category Definitions

### `conversions`

Convert a color from one format to another. Input and output are different formats.

### `generators`

Generate colors — random or derived from a given color or algorithm.

### `manipulators`

Receive one or more colors and return one or more **different** colors. Default input format is hex.

### `utilities`

Helper functions that complement or annotate a color without transforming it into a different color.

### `validators`

Return `true` or `false` for a given color string.

### `helpers`

Generic internal utilities with no color-specific logic. Not exported publicly.

### `types`

Shared TypeScript types and interfaces used across the library. Structure TBD.

---

## Code Conventions

### File structure (per `.ts` source file)

```ts
import { ... } from '...';   // 1. Imports first

/**
 * JSDoc in English.          // 2. JSDoc after imports
 */
export const fn = () => { ... };
```

### Naming

- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Files: `camelCase.ts` matching the exported function name

### Return types

Functions that return RGB/RGBA values return an object with named channels and a `toStringCss()` method:

```ts
{ r: number; g: number; b: number; toStringCss: () => string }
{ r: number; g: number; b: number; a: number; toStringCss: () => string }
```

Functions that return a single color string (hex) return `string` directly.

### Constants

Always use constants from `src/constants/` instead of magic numbers or strings:

```ts
// ✅
parseInt(hex, HEX_BASE)
value.padStart(HEX_COMPONENT_LENGTH, HEX_PAD_ZERO)

// ❌
parseInt(hex, 16)
value.padStart(2, '0')
```

### Comments

- **JSDoc** (`/** */`): in English. Always present on every exported function.
- **Inline comments** (`//`): in Spanish. Only where the logic is not self-evident — explain *why*, not *what*.

### Validation

- Always validate inputs at the function boundary using the validators (`isHex`, `isRgb`, etc.).
- Throw descriptive `Error` messages with the expected format.
- Non-null assertions (`!`) are only acceptable after a prior validation that guarantees the match.

---

## Testing

- Every function must have a test file mirroring its path: `src/core/X/fn.ts` → `test/core/X/fn.test.ts`
- Tests must be written as part of implementing the function — never as a separate step.
- Tests are written with Jest via TSDX.
- Each `it` block should have a Spanish comment above it explaining the intent.
- Cover: happy path, boundary values, and invalid inputs.

---

## Git Conventions

### Branch format

```text
<type>/<DDMMYYYY>-<HHMM>-<kebab-case-description>
```

Example: `feature/31032026-1430-add-get-random-rgb`

### Allowed branch types

`feature` | `bugfix` | `refactor` | `test` | `docs` | `tooling` | `chore` | `ci`

### Commit format

```text
<type>: <short description in infinitive form>
```

Example: `feat: add invert function to manipulate hex colors`

### Allowed commit types

`feat` | `bugfix` | `refactor` | `test` | `docs` | `tool` | `chore` | `ci`

> ⚠️ Branch types and commit types differ: `feature/` → `feat:`, `tooling/` → `tool:`.

### Rules

- Branches are always created from `main`.
- No direct commits or pushes to `main`.
- PRs must be small and focused.
- Use `npm run bin/new-branch` to create branches with the correct format automatically.

---

## Hooks (Husky)

| Hook         | Validates                          |
|--------------|------------------------------------|
| `pre-commit` | Branch name format                 |
| `pre-commit` | Lint (strict, no warnings)         |
| `pre-commit` | All tests pass                     |
| `pre-commit` | Build succeeds                     |
| `commit-msg` | Commit message format (commitlint) |
| `pre-push`   | Blocks direct push to `main`       |
