export const isValidHexColor = (hexColor: string): boolean => {
	return /^#([0-9A-F]{3}){1,2}$/i.test(hexColor);
};
