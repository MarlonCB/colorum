# 🧾 Git Guidelines – Colorum

This document defines the conventions for Git branch names and commit messages used in the **Colorum** project to ensure clarity, consistency, and traceability across all development work.

---

## 📂 Branch Naming Convention

### Branch Format

```text
<type>/<DDMMYYYY>-<HHMM>-<kebab-case-description>
```

- `<type>`: Category of the change (see list below).
- `<DDMMYYYY>`: Date the branch was created (e.g., `31032026` for March 31, 2026).
- `<HHMM>`: Time the branch was created in 24h format (e.g., `1430` for 2:30 PM). Ensures uniqueness when multiple branches are created on the same day.
- `<kebab-case-description>`: Short, lowercase description in **English** using hyphens.

### Branch Types

| Type       | Description                                                               |
|------------|---------------------------------------------------------------------------|
| `feature`  | Adding a new functionality to the library.                                |
| `bugfix`   | Fixing bugs or broken logic.                                              |
| `refactor` | Improving internal code structure without changing behavior.              |
| `test`     | Adding or updating test cases.                                            |
| `docs`     | Updating or improving documentation.                                      |
| `tooling`  | Configuration, scripts or tools not directly related to library logic.    |
| `chore`    | Minor changes with no effect on the library logic.                        |
| `ci`       | Changes related to CI/CD pipelines or deployment scripts.                 |

### Branch Examples

```text
feature/31032026-1430-add-get-random-rgb
bugfix/31032026-0915-fix-hex-validation
refactor/31032026-1100-simplify-to-string-css
test/31032026-1645-add-tests-for-is-rgb
docs/31032026-0830-update-git-conventions
tooling/31032026-1200-setup-eslint-and-prettier
chore/31032026-1715-rename-entry-file
ci/31032026-0900-add-test-workflow
```

⚠️ **Important:** Branch descriptions must always be in **English**, regardless of the documentation language or code comments.

---

## ✍️ Commit Message Convention

### Commit Format

```text
<type>: <short description in infinitive form>
```

- The **type** must match one of the categories used in branch names.
- The **description** must be written in **English**, in the **infinitive form** (e.g., Add, Fix, Refactor).
- Do **not** end the subject line with a period.
- Limit the subject line to **72 characters max**.
- Leave a blank line before the body (optional).
- The body can provide context, motivation, or related issues.

### Commit Types

> ⚠️ Commit types are different from branch types. For example, a `feature/...` branch uses `feat:` commits, and a `tooling/...` branch uses `tool:` commits.

- `feat`
- `bugfix`
- `refactor`
- `test`
- `docs`
- `tool`
- `chore`
- `ci`

### Commit Examples

```text
feat: add getRandomRgb function
bugfix: fix invalid HEX validation
refactor: simplify toStringCss logic
test: add tests for hexToRgb
docs: update README with hexToHsl usage
tool: configure function generator script
chore: rename main entry file
ci: add GitHub Actions workflow for tests
```

### Example with body

```text
feat: add getRandomRgb function

This function returns a random RGB color and includes a toStringCss() method.
```

### Bad Examples

```text
Feature: Add new function         ❌ (capitalized type)
bugfix: fixed hex validation      ❌ (past tense)
feature: Agregar nueva función    ❌ (not in English)
feature: Add color generator.     ❌ (trailing period)
```

---

## ✅ Additional Rules

- Branches must always be created from `main`.
- Direct commits to `main` are not allowed.
- Pull requests must be small, focused, and reviewed.
- Run tests before pushing any changes.
- `Rebase` is preferred over `merge` to keep the commit history clean (optional).
