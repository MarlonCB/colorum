# 🧾 Git Guidelines – Colorum

This document defines the conventions for Git branch names and commit messages used in the **Colorum** project to ensure clarity, consistency, and traceability across all development work.

---

## 📂 Branch Naming Convention

### Format

```
<type>/<ticket-id>-<kebab-case-description>
```

- `<type>`: Category of the change (see list below).
- `<ticket-id>`: **Required for internal team members.** ID of the Jira ticket (e.g., `COL-12`).
- `<kebab-case-description>`: Short, lowercase description in **English** using hyphens.

### Allowed Types

| Type       | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| `feature`  | Adding a new functionality to the library.                                 |
| `bugfix`   | Fixing bugs or broken logic.                                                |
| `refactor` | Improving internal code structure without changing behavior.               |
| `test`     | Adding or updating test cases.                                              |
| `docs`     | Updating or improving documentation.                                        |
| `tooling`  | Configuration, scripts or tools not directly related to the library logic. |
| `chore`    | Minor changes with no effect on the library logic.                         |
| `ci`       | Changes related to CI/CD pipelines or deployment scripts.                  |

### Examples

```
feature/COL-12-add-get-random-rgb
bugfix/COL-21-fix-hex-validation
refactor/COL-15-improve-to-css-string
test/COL-19-add-tests-for-is-valid-rgb
docs/COL-05-update-readme-examples
tooling/COL-08-setup-eslint-and-prettier
chore/COL-31-rename-entry-file
ci/COL-44-add-test-workflow
```

🔖 **Ticket reference is required only for internal contributors.**

All team members must link their branches and commits to a Jira ticket (e.g., `COL-12`).

External contributors **can omit** the ticket ID if they are submitting small improvements, documentation updates, or contributions not tied to a planned task.

⚠️ **Important:** Branch descriptions must always be in **English**, regardless of the documentation language or code comments.

---

## ✍️ Commit Message Convention

### Format

```
<type>: <short description in infinitive form>
```

- The **type** must match one of the categories used in branch names.
- The **description** must be written in **English**, in the **infinitive form** (e.g., Add, Fix, Refactor).
- Do **not** end the subject line with a period.
- Limit the subject line to **72 characters max**.
- Leave a blank line before the body (optional).
- The body can provide context, motivation, or related issues.

### Allowed Types

- `feat`
- `bugfix`
- `refactor`
- `test`
- `docs`
- `tool`
- `chore`
- `ci`

### Examples

```
feature: Add getRandomRgb function
bugfix: Fix invalid HEX validation
refactor: Simplify toCssString logic
test: Add tests for hexToRgb
docs: Update README with hexToHsl usage
tooling: Configure function generator script
chore: Rename main entry file
ci: Add GitHub Actions workflow for tests
```

### Example with body

```
feature: Add getRandomRgb function

This function returns a random RGB color and includes a toCssString() method.
Related to COL-12.
```

### Bad Examples

```
Feature: Add new function         ❌ (capitalized type)
bugfix: fixed hex validation      ❌ (past tense)
feature: Agregar nueva función    ❌ (not in English)
feature: Add color generator.     ❌ (trailing period)
```

---

## ✅ Additional Rules

- All internal work must be linked to a Jira ticket.
- Branches must always be created from `main`.
- Direct commits to `main` are not allowed.
- Pull requests must be small, focused, and reviewed.
- Run tests before pushing any changes.
- `Rebase` is preferred over `merge` to keep the commit history clean (optional).