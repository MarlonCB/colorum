# Core

This folder contains the main functions of Colorum. This is where the central logic of the library for color handling is implemented.

## Rules

- All functions in this folder must be directly related to color manipulation, conversion, or validation.
- They must be well documented and have Jest tests to ensure correct behavior.
- Each function must be in its own file and exported from `index.ts`.

## Categories

Functions within `core` are organized into the following categories:

- **Conversions (`conversions`)**: Functions for converting colors between different formats.
- **Generators (`generators`)**: Functions for generating random colors.
- **Manipulators (`manipulators`)**: Functions for modifying and adjusting color values.
- **Utilities (`utilities`)**: Helper functions that complement the library's core functionality.
- **Validators (`validators`)**: Functions for verifying whether a color or value is valid in a specific format.

## Scaffolding

To quickly create a new core function and its test file, run:

```sh
npm run bin/new-feature
```
