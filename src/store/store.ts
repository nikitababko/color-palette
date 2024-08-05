import { atomWithStorage } from 'jotai/utils';
import type { ColorType } from './types';

export const storeColors = atomWithStorage<ColorType[]>(
  'colors',
  [
    {
      id: `#ABC4AB-${Math.random()}`,
      hex: '#ABC4AB',
      isLocked: false,
    },
    {
      id: `#A39171-${Math.random()}`,
      hex: '#A39171',
      isLocked: false,
    },
    {
      id: `#DCC9B6-${Math.random()}`,
      hex: '#DCC9B6',
      isLocked: false,
    },
    {
      id: `#727D71-${Math.random()}`,
      hex: '#727D71',
      isLocked: false,
    },
    {
      id: `#6D4C3D-${Math.random()}`,
      hex: '#6D4C3D',
      isLocked: false,
    },
  ],
);
