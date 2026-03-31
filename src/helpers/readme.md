# Helpers

This folder contains auxiliary functions that support the main functions of Colorum. These functions are not directly related to color handling — they serve as internal utilities for the library's logic.

## Rules

- All functions in this folder must be generic and reusable within the project.
- They must not contain logic specific to color conversion, validation, or manipulation.
- They must be well documented and have Jest tests to ensure correct behavior.
- They must be exported through an `index.ts` for easy access.

## Structure

Each helper function must be in its own file within this folder and exported from `index.ts`.

## Example

### helpers/getRandomIntInRange.ts

```ts
export const getRandomIntInRange = (min: number, max: number): number => {
  // +1 makes the range inclusive on both ends (min and max can both be generated)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

### Why does this function belong in helpers?

`getRandomIntInRange` is a good example of a helper because:

- It is not related to color handling — it is a general-purpose math utility.
- It can be reused across different parts of the codebase wherever a random number in a range is needed.
- It keeps the core functions clean by extracting low-level logic into a dedicated place.
