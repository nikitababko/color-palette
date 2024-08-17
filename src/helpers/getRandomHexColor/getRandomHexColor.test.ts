import { describe, expect, it } from 'vitest';
import { getRandomHexColor } from './getRandomHexColor';

describe('getRandomHexColor', () => {
  it('returns a valid hex color string', () => {
    const hexColor = getRandomHexColor();

    // Check that the string starts with '#'
    expect(hexColor.startsWith('#')).toBe(true);

    // Check that the length of the string is 7 characters (including #)
    expect(hexColor).toHaveLength(7);
  });

  it('generates different colors on multiple calls', () => {
    const hexColor1 = getRandomHexColor();
    const hexColor2 = getRandomHexColor();

    // Check that two calls to the function do not return the same color
    // In rare cases, the same color may be returned, but most of the time, the colors will differ
    expect(hexColor1).not.toBe(hexColor2);
  });

  it('generates a valid hexadecimal color code', () => {
    const hexColor = getRandomHexColor();

    // Regular expression to validate the correct HEX code format
    const hexPattern = /^#[\dA-Fa-f]{6}$/;

    // Check that the string matches the HEX code format
    expect(hexColor).toMatch(hexPattern);
  });
});
