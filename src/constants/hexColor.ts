/**
 * Minimum numeric value representable by a 6-digit hexadecimal color.
 */
export const MIN_HEX_COLOR = 0x000000;

/**
 * Maximum numeric value representable by a 6-digit hexadecimal color.
 */
export const MAX_HEX_COLOR = 0xffffff;

/**
 * Prefix used to indicate a valid CSS hexadecimal color string.
 */
export const HEX_STRING_PREFIX = '#';

/**
 * Number of characters to skip from the beginning of a hex string to remove the prefix.
 */
export const HEX_PREFIX_LENGTH = 1;

/**
 * Number of hexadecimal characters in a full 6-digit hex color (excluding the prefix).
 */
export const HEX_STRING_LENGTH = 6;

/**
 * Number of characters per RGB component in hexadecimal format.
 */
export const HEX_COMPONENT_LENGTH = 2;

/**
 * Radix (base) for hexadecimal number conversion.
 */
export const HEX_RADIX = 16;

/**
 * Starting position for extracting the red component from a hex string.
 */
export const HEX_RED_START = 0;

/**
 * Starting position for extracting the green component from a hex string.
 */
export const HEX_GREEN_START = HEX_COMPONENT_LENGTH;

/**
 * Starting position for extracting the blue component from a hex string.
 */
export const HEX_BLUE_START = HEX_COMPONENT_LENGTH * 2;
