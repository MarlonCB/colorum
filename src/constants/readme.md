# Constants

This folder contains constant values used across Colorum. Centralizing constants avoids magic numbers and makes the codebase easier to maintain.

## Rules

- All constants must be immutable and exported for use in other parts of the code.
- They must not contain logic or functions — only fixed values.
- They must be organized into separate files by category.
- They must be exported through an `index.ts` for easy access.

## Structure

Each group of related constants must be in its own file within this folder and exported from `index.ts`.

## Example

### constants/colorNames.ts

```ts
export const COLOR_NAMES: Record<string, string> = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
};
```

### Why does this constant belong in constants?

`COLOR_NAMES` is a good example of a constant because:

- It contains fixed values that do not change at runtime.
- It can be reused across multiple parts of the library without redefining it.
- It centralizes data, avoiding scattered values throughout the code.
- It improves readability and maintainability by providing a single source of truth.
