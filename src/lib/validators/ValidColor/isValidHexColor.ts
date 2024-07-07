import { HEXADECIMAL_REGEX } from "../../../constants/hexConstants";

export const isValidHexColor = (hexColor: string): boolean => {
	return HEXADECIMAL_REGEX.test(hexColor);
};
