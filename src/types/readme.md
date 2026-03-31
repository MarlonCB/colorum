# Types

This folder contains type definitions and data structures used across Colorum. Centralizing types in one place improves code organization and maintainability.

## Rules

- All types must be properly typed with TypeScript.
- They must represent reusable structures within the library.
- They must not contain business logic — only type definitions.
- They must be exported through an `index.ts` for easy access.

## Structure

Each type or group of related types must be in its own file within this folder and exported from `index.ts`.

## Example

### types/color.ts

```ts
export type RGB = {
  r: number;
  g: number;
  b: number;
};
```
