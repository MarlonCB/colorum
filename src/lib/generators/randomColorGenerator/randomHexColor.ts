import {
	BASE_16,
	HEXADECIMAL_MAX_LENGTH,
	HEXADECIMAL_NOTATION,
	HEXADECIMAL_VALUE_MAP,
} from '../../../constants/hexConstants';

/**
 * The function `randomHexColor` generates a random hexadecimal color code.
 * @returns A random hexadecimal color code is being returned by the `randomHexColor` function.
 */
export const randomHexColor = () => {
	let hexColor = HEXADECIMAL_NOTATION;
	const piecesToAssemble = HEXADECIMAL_VALUE_MAP;
	for (let counter = 0; counter < HEXADECIMAL_MAX_LENGTH; counter++) {
		hexColor += piecesToAssemble[Math.floor(Math.random() * BASE_16)];
	}
	return hexColor;
};
