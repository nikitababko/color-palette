export const getRandomHexColor = () => {
  const randomValue = Math.floor(
    // eslint-disable-next-line unicorn/number-literal-case
    Math.random() * 0xff_ff_ff,
  );
  const hexValue = randomValue.toString(16);
  return `#${hexValue.padStart(6, '0')}`;
};
