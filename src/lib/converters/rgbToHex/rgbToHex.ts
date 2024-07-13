import { BASE_16, HEXADECIMAL_NOTATION, RGB_COMPONENTS_COUNT } from '../../../constants';
import { isValidRgbColor } from '../../validators';

/**
 * Converts an RGB color string to its hexadecimal representation.
 * @param {string} rgbColor The RGB color string (e.g., 'rgb(255, 0, 0)').
 * @returns {string} The hexadecimal representation of the color, including the '#' prefix.
 * @throws {Error} Throws an error if the RGB format is invalid.
 */
export const rgbToHex = (rgbColor: string): string => {
    // Check if the RGB color is valid using the `isValidRgbColor` validator
    const validColor = isValidRgbColor(rgbColor);

    // Extract numeric values of r, g, b using a regular expression
    const match = rgbColor.match(/\d+/g);

    // Check if the color is invalid or if all three RGB components were not found
    if (!validColor || !match || match.length < RGB_COMPONENTS_COUNT) {
        // Throw an error indicating invalid RGB format
        throw new Error('Invalid rgb format');
    }

    // Convert r, g, b values to numbers and assign them to individual variables
    const [r, g, b] = match.map(Number);

    // Convert each r, g, b component to its hexadecimal representation
    const hexR = r.toString(BASE_16).padStart(2, '0');
    const hexG = g.toString(BASE_16).padStart(2, '0');
    const hexB = b.toString(BASE_16).padStart(2, '0');

    // Return the hexadecimal representation of the color, including the '#' prefix in uppercase
    return `${HEXADECIMAL_NOTATION}${hexR}${hexG}${hexB}`.toUpperCase();
};

