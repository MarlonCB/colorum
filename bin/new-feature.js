import { select, input, confirm } from '@inquirer/prompts';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simula __dirname y __filename en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log("Welcome to the function generator for Colorum!");

  try {
    // Seleccionar el tipo de función
    const type = await select({
      message: 'Choose a function type:',
      choices: [
        { name: 'Conversions', value: 'conversions' },
        { name: 'Manipulators', value: 'manipulators' },
        { name: 'Utilities', value: 'utilities' },
        { name: 'Validators', value: 'validators' },
        { name: 'Generators', value: 'generators' },
      ],
    });

    // Solicitar el nombre de la función
    const functionName = await input({
      message: 'Enter the function name (camelCase):',
      validate: (value) => /^[a-z]+([A-Z][a-z]*)*$/.test(value) || 'Invalid function name. Use camelCase format.',
    });

    // Confirmar si se desea crear el archivo de prueba
    const generateTest = await confirm({
      message: 'Would you like to add a test for this function?',
      default: true,
    });

    // Rutas de archivo
    const projectRoot = path.resolve(__dirname, '..');
    const folderPath = path.join(projectRoot, `src/core/${type}`);
    const filePath = path.join(folderPath, `${functionName}.ts`);
    const testFilePath = path.join(projectRoot, `test/core/${type}/${functionName}.test.ts`);

    // Contenido de la función
    const functionContent = `/**
 * Function description here
 *
 * @param {number} param1 - Description of param1
 * @param {string} param2 - Description of param2
 * @returns {string} Description of the return value
 *
 * @example
 * ${functionName}(42, "example");
 * // Returns "Example result"
 */
export const ${functionName} = (param1: number, param2: string): string => {
  return '';
};
`;

    // Contenido del test
    const testContent = `import { ${functionName} } from '../../../src/core/${type}/${functionName}';

describe('${functionName}', () => {
  it('should return the correct result for valid inputs', () => {
    const result = ${functionName}(42, "example");
    expect(result).toBe("42 - example");
  });

  it('should handle edge cases appropriately', () => {
    // Add additional test cases as needed
  });
});
`;

    // Lista de archivos a sobrescribir
    const filesToOverwrite = [];

    // Comprobar si ya existen los archivos y agregar a la lista
    if (fs.existsSync(filePath)) {
      filesToOverwrite.push(path.relative(process.cwd(), filePath));
    }
    if (generateTest && fs.existsSync(testFilePath)) {
      filesToOverwrite.push(path.relative(process.cwd(), testFilePath));
    }

    // Si existen archivos, preguntar si se quieren sobrescribir
    if (filesToOverwrite.length > 0) {
      console.log(chalk.bgYellow.black.bold('⚠️  WARNING '));
      console.log(chalk.yellow.bold('The following files already exist and will be overwritten:'));
      filesToOverwrite.forEach((file) => {
        console.log(chalk.yellowBright(file));
      });

      const overwriteAll = await confirm({
        message: 'Do you want to overwrite all the existing files?',
        default: false,
      });

      if (!overwriteAll) {
        console.log(chalk.red('File creation canceled.'));
        return;
      }
    }

    // Crear directorios y archivos necesarios
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    fs.writeFileSync(filePath, functionContent);
    console.log(chalk.green(`Function file created successfully at ${path.relative(process.cwd(), filePath)}`));

    if (generateTest) {
      const testFolderPath = path.dirname(testFilePath);
      if (!fs.existsSync(testFolderPath)) {
        fs.mkdirSync(testFolderPath, { recursive: true });
      }
      fs.writeFileSync(testFilePath, testContent);
      console.log(chalk.green(`Test file created successfully at ${path.relative(process.cwd(), testFilePath)}`));
    }
  } catch (error) {
    if (error.name === 'ExitPromptError') {
      console.log(chalk.yellow('\nProcess interrupted. Exiting...'));
    } else {
      console.error("Error:", error);
    }
  }
})();
