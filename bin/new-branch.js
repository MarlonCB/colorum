import { select, input, confirm } from '@inquirer/prompts';
import chalk from 'chalk';
import { execSync } from 'child_process';

const BRANCH_TYPES = [
  { name: 'feature  — new functionality', value: 'feature' },
  { name: 'bugfix   — fix broken logic or errors', value: 'bugfix' },
  { name: 'refactor — improve code without changing behavior', value: 'refactor' },
  { name: 'test     — add or update tests', value: 'test' },
  { name: 'docs     — update documentation', value: 'docs' },
  { name: 'tooling  — scripts or configuration', value: 'tooling' },
  { name: 'chore    — minor maintenance changes', value: 'chore' },
  { name: 'ci       — CI/CD changes', value: 'ci' },
];

const getDateStamp = () => {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${dd}${mm}${yyyy}-${hh}${min}`;
};

const toKebabCase = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

(async () => {
  console.log(chalk.bold('\nWelcome to the branch generator for Colorum!\n'));

  try {
    const type = await select({
      message: 'Select the branch type:',
      choices: BRANCH_TYPES,
    });

    const description = await input({
      message: 'Enter a short branch description:',
      validate: (value) => value.trim().length > 0 || 'Description cannot be empty.',
    });

    const dateStamp = getDateStamp();
    const kebabDescription = toKebabCase(description);
    const branchName = `${type}/${dateStamp}-${kebabDescription}`;

    console.log(chalk.dim(`\nBranch name: ${chalk.white.bold(branchName)}`));

    const confirmed = await confirm({
      message: 'Create this branch?',
      default: true,
    });

    if (!confirmed) {
      console.log(chalk.yellow('\nBranch creation canceled.'));
      return;
    }

    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });

    console.log(chalk.green(`\n✅ Branch '${branchName}' created successfully.\n`));
  } catch (error) {
    if (error.name === 'ExitPromptError') {
      console.log(chalk.yellow('\nProcess interrupted. Exiting...'));
    } else {
      console.error(chalk.red('\nError:'), error.message);
    }
  }
})();
