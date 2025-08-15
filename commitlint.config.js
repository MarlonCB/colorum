export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',     // Nueva funcionalidad
          'bugfix',   // Corrección de errores
          'refactor', // Cambios en el código sin añadir funcionalidades
          'test',     // Añadir o modificar tests
          'docs',     // Cambios en documentación
          'tool',     // Herramientas o utilidades internas
          'chore',    // Tareas de mantenimiento
          'ci'        // Cambios en configuración de integración continua
        ]
      ],
      'scope-case': [2, 'always', 'kebab-case'],
      'subject-case': [
        2,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
      ],
      'subject-empty': [2, 'never'],
      'type-case': [2, 'always', 'lower-case']
    }
  };