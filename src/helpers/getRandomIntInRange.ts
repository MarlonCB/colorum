export const getRandomIntInRange = (min: number, max: number): number => {
  // +1 hace que el rango sea inclusivo en ambos extremos (min y max pueden ser generados)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
