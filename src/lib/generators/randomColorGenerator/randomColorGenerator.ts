import { COLOR_HEX, COLOR_RGB } from '../../../constants/colorConstants';
import { TypesColorFormat } from '../../../types/colorTypes';
import { randomHexColor } from './randomHexColor';
import { randomRgbColor } from './randomRgbColor';


/**
 * The function `randomColorGenerator` generates a random color in either RGB or HEX format.
 * @param {TypesColorFormat} format - The `format` parameter in the `randomColorGenerator` function is used to
 * specify the format in which the random color should be generated. It has a default value of
 * `COLOR_HEX`, which indicates that the color should be generated in hexadecimal format. The function
 * then checks the value of `format`
 * @returns The `randomColorGenerator` function returns a randomly generated color in either RGB or HEX
 * format based on the `format` parameter provided.
 */
export const randomColorGenerator = (format: TypesColorFormat = COLOR_HEX): string => {
	switch (format) {
		case COLOR_RGB:
			return randomRgbColor();
		case COLOR_HEX:
			return randomHexColor();
		default:
			return randomHexColor();
	}
};
