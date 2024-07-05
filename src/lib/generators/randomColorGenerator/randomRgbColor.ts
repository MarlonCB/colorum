import { RGB_NOTATION } from '../../../constants';
import { getRandomValue } from '../../../helpers';

/**
 * The function `randomRgbColor` generates a random RGB color value in TypeScript.
 * @returns A random RGB color in the format "rgb(red, green, blue)" is being returned.
 */
export const randomRgbColor = (): string => {
	const red = getRandomValue();
	const green = getRandomValue();
	const blue = getRandomValue();
	return `${RGB_NOTATION}(${red}, ${green}, ${blue})`;
};
