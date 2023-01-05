import { randomHexColor, randomRgbColor } from '..';

describe('Random Generators', () => {
  it('Random hex color', () => {
    expect(randomHexColor()).toMatch(new RegExp(/^#([0-9a-fA-f]{6})$/));
  });
  it('Random rgb color', () => {
    expect(randomRgbColor()).toMatchObject({
      r: expect.any(Number),
      g: expect.any(Number),
      b: expect.any(Number),
    });
  });
});
