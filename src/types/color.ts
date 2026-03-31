export type RGB = {
  r: number;
  g: number;
  b: number;
  toStringCss: () => string;
};

export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
  toStringCss: () => string;
};
