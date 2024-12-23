# Types

Esta carpeta contiene definiciones de tipos y estructuras utilizadas en Colorum. Centralizar los tipos en un solo lugar ayuda a mejorar la organización y el mantenimiento del código.

## Reglas de uso
- Todos los tipos deben estar correctamente tipados con TypeScript.
- Deben representar estructuras reutilizables en la librería.
- No deben contener lógica de negocio, solo definiciones de tipos.
- Deben ser exportados a través de un `index.ts` para facilitar su acceso.

## Estructura
Cada tipo o conjunto de tipos relacionados debe estar en su propio archivo dentro de esta carpeta y ser exportado desde `index.ts`.

## Ejemplo
### types/color.ts
```ts
export type RGB = {
    r: number;
    g: number;
    b: number;
};
```