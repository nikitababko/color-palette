import type React from 'react';

export type ColorProps = {
  color: string;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  colorsLength: number;
};
