import {
	MAXIMUM_RGB_VALUE,
	MINIMUM_RGB_VALUE,
} from '../../constants/rgbConstants';

/**
 * The function getRandomValue returns a random number within a specified range.
 * @returns The function `getRandomValue` returns a random number within the range of
 * `MINIMUM_RGB_VALUE` and `MAXIMUM_RGB_VALUE`, inclusive.
 */
export const getRandomValue = (): number => {
	return (
		MINIMUM_RGB_VALUE +
		Math.floor(Math.random() * (MAXIMUM_RGB_VALUE - MINIMUM_RGB_VALUE + 1))
	);
};
