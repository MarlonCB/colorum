import {
  MAXIMUM_RGB_VALUE,
  MINIMUM_RGB_VALUE,
} from '../../utils/constants/rgbConstants';

/**
 * It returns an object with three properties, r, g, and b, each of which is a random number between 0
 * and 255.
 * @returns An object with three properties: r, g, and b.
 */
export const randomRgbColor = () => {
  let r =
    MINIMUM_RGB_VALUE +
    Math.floor(Math.random() * (MAXIMUM_RGB_VALUE - MINIMUM_RGB_VALUE + 1));
  let g =
    MINIMUM_RGB_VALUE +
    Math.floor(Math.random() * (MAXIMUM_RGB_VALUE - MINIMUM_RGB_VALUE + 1));
  let b =
    MINIMUM_RGB_VALUE +
    Math.floor(Math.random() * (MAXIMUM_RGB_VALUE - MINIMUM_RGB_VALUE + 1));
  let rgbColor = { r, g, b };
  return rgbColor;
};
