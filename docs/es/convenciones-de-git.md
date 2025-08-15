# 🧾 Convenciones de Git – Colorum

Este documento define las convenciones para los nombres de ramas y los mensajes de commits usados en el proyecto **Colorum** para asegurar claridad, consistencia y trazabilidad en todo el trabajo de desarrollo.

---

## 📂 Convención de nombres de ramas

### Formato

```
<tipo>/<id-de-tarea>-<descripcion-en-kebab-case>
```

- `<tipo>`: Categoría del cambio (ver lista abajo).
- `<id-de-tarea>`: **Obligatorio para el equipo interno.** Corresponde al ID del ticket en Jira (por ejemplo: `COL-12`).
- `<descripcion-en-kebab-case>`: Descripción corta, en **inglés**, en minúsculas y con guiones.

### Tipos permitidos

| Tipo       | Descripción                                                                 |
|------------|-----------------------------------------------------------------------------|
| `feature`  | Nueva funcionalidad para la librería.                                       |
| `bugfix`   | Corrección de errores o lógica rota.                                        |
| `refactor` | Mejora del código sin alterar su comportamiento.                           |
| `test`     | Agregado o actualización de pruebas.                                        |
| `docs`     | Cambios en la documentación.                                                |
| `tooling`  | Scripts o configuraciones que no afectan directamente la lógica del core.  |
| `chore`    | Cambios menores que no afectan la lógica de la librería.                   |
| `ci`       | Cambios relacionados con CI/CD o despliegue.                               |

### Ejemplos

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

🔖 **El uso del ID de Jira es obligatorio solo para el equipo interno.**

Los colaboradores externos **pueden omitirlo** si están contribuyendo con mejoras pequeñas, documentación u otros aportes que no están relacionados a tareas planificadas.

⚠️ **Importante:** Las descripciones de las ramas deben estar siempre en **inglés**, independientemente del idioma de la documentación o comentarios del código.

---

## ✍️ Convención para mensajes de commit

### Formato

```
<tipo>: <descripción corta en infinitivo>
```

- El **tipo** debe coincidir con uno de los usados en nombres de ramas.
- La **descripción** debe estar escrita en **inglés**, en infinitivo (por ejemplo: Add, Fix, Refactor).
- No terminar la línea con punto.
- Máximo 72 caracteres para la línea principal.
- Línea en blanco antes del cuerpo (opcional).
- El cuerpo puede dar más contexto si es necesario.

### Tipos permitidos

- `feat`
- `bugfix`
- `refactor`
- `test`
- `docs`
- `tool`
- `chore`
- `ci`

### Ejemplos

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

### Ejemplo con cuerpo

```
feature: Add getRandomRgb function

This function returns a random RGB color and includes a toCssString() method.
Related to COL-12.
```

### Ejemplos incorrectos

```
Feature: Add new function         ❌ (tipo en mayúsculas)
bugfix: fixed hex validation      ❌ (pasado)
feature: Agregar nueva función    ❌ (no está en inglés)
feature: Add color generator.     ❌ (punto al final)
```

---

## ✅ Reglas adicionales

- Todo el trabajo del equipo interno debe estar vinculado a un ticket en Jira.
- Las ramas deben crearse siempre desde `main`.
- No se permiten commits directos a `main`.
- Los pull requests deben ser pequeños, enfocados y pasar revisión.
- Ejecutar pruebas antes de hacer push.
- Se prefiere `rebase` sobre `merge` para mantener el historial limpio (opcional).