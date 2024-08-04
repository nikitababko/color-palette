import React from 'react';
import { useSetAtom } from 'jotai';
import { GenerateButtonContainer } from './styles';
import { storeColors } from '../../store/store';

const getRandomHexColor = () => {
  const randomValue = Math.floor(
    // eslint-disable-next-line unicorn/number-literal-case
    Math.random() * 0xff_ff_ff,
  );
  const hexValue = randomValue.toString(16);
  return `#${hexValue.padStart(6, '0')}`;
};

export const GenerateButton: React.FC = () => {
  const setColors = useSetAtom(storeColors);

  const handleGenerate = () => {
    setColors((previousState) => {
      return previousState.map(() => getRandomHexColor());
    });
  };

  return (
    <GenerateButtonContainer onClick={handleGenerate}>
      Generate colors
    </GenerateButtonContainer>
  );
};
