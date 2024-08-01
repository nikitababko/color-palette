import type React from 'react';

export type ColorsWrapperProps = {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
};
