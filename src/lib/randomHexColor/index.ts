import {
	BASE_16,
	HEXADECIMAL_NOTATION,
	HEXADECIMAL_VALUE_MAP,
} from '../../utils/constants/hexConstants';

/**
 * This function will return a random hex color code.
 * @returns A function that returns a random hex color.
 */

export const randomHexColor = (): string => {
	let hexColor = HEXADECIMAL_NOTATION;
	let PiecesToAssemble = HEXADECIMAL_VALUE_MAP;
	for (let counter = 0; counter < 6; counter++) {
		hexColor = hexColor + PiecesToAssemble[Math.floor(Math.random() * BASE_16)];
	}
	return hexColor;
};
