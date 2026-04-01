export type RGBColor = {
  r: number;
  g: number;
  b: number;
  toStringCss: () => string;
};

export type RGBAColor = {
  r: number;
  g: number;
  b: number;
  a: number;
  toStringCss: () => string;
};
