# Core

Esta carpeta contiene las funciones principales de Colorum. Aquí es donde se implementa la lógica central de la librería para el manejo de colores.

## Reglas de uso
- Todas las funciones en esta carpeta deben estar relacionadas directamente con la manipulación, conversión o validación de colores.
- Deben estar bien documentadas y contar con pruebas en Jest para asegurar su correcto funcionamiento.
- Cada función debe estar ubicada en su propio archivo y ser exportada desde `index.ts`.

## Categorías
Las funciones dentro de `core` están organizadas en las siguientes categorías:

- **Conversions (`conversions`)**: Funciones encargadas de convertir colores entre distintos formatos.
- **Manipulators (`manipulators`)**: Funciones para modificar y ajustar valores de color.
- **Utilities (`utilities`)**: Funciones auxiliares que complementan el funcionamiento de la librería.
- **Validators (`validators`)**: Funciones para verificar si un color o un valor es válido en un formato específico.

## Comandos especiales
Para facilitar la creación de funciones core y sus pruebas, se puede utilizar el siguiente comando especial:

```sh
yarn bin/new-feature
```

```sh
npm run bin/new-feature
```
