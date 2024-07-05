export const isValidRange = (number: number, min: number, max: number): boolean => {
	return number >= min && number <= max;
};