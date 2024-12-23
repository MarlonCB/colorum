# Helpers

Esta carpeta contiene funciones auxiliares necesarias para el funcionamiento de las funciones principales de Colorum. Estas funciones no están directamente relacionadas con el manejo de colores, sino que sirven como soporte para la lógica interna de la librería.

## Reglas de uso
- Todas las funciones en esta carpeta deben ser genéricas y reutilizables dentro del proyecto.
- No deben contener lógica específica de conversión, validación o manipulación de colores.
- Deben estar bien documentadas y contar con pruebas en Jest para asegurar su correcto funcionamiento.

## Estructura
Cada función auxiliar debe estar ubicada en su propio archivo dentro de esta carpeta y ser exportada desde un `index.ts` para facilitar su uso en el resto del proyecto.

## Ejemplo
### helpers/randomInRange.ts
```ts
export function randomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### ¿Por qué esta función pertenece a helpers?

La función `randomInRange` es un buen ejemplo de una función auxiliar porque:

- No está relacionada directamente con el manejo de colores, sino que es una utilidad matemática general.
- Puede ser reutilizada en diferentes partes del código donde se necesite generar números aleatorios dentro de un rango.
- Facilita la modularidad y la limpieza del código, evitando repetir lógica en múltiples archivos.
- Su uso es frecuente en diversas operaciones internas, como la generación de valores aleatorios en algoritmos o cálculos específicos dentro de la librería.
