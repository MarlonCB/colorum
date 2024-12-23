# Constants

Esta carpeta contiene valores constantes utilizados en Colorum. Estas constantes permiten centralizar valores reutilizables en la librería para mantener un código más limpio y fácil de mantener.

## Reglas de uso
- Todas las constantes deben ser inmutables y exportadas para su uso en otras partes del código.
- No deben contener lógica ni funciones, solo valores fijos.
- Deben estar organizadas en archivos separados según su categoría.
- Deben ser exportadas a través de un `index.ts` para facilitar su acceso.

## Estructura
Cada conjunto de constantes debe estar ubicado en su propio archivo dentro de esta carpeta y ser exportado desde `index.ts`.

## Ejemplo
### constants/colorNames.ts
```ts
export const COLOR_NAMES: Record<string, string> = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};
```

### ¿Por qué esta constante pertenece a constants?

La constante `COLOR_NAMES` es un buen ejemplo de una constante porque:

- Contiene valores fijos que no cambian en la ejecución del programa.
- Se puede reutilizar en múltiples partes de la librería sin necesidad de redefinirlos.
- Facilita la centralización de datos, evitando la dispersión de valores en el código.
- Mejora la legibilidad y el mantenimiento al definir un solo punto de referencia para nombres de colores.

