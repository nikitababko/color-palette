import React from 'react';
import { useSetAtom } from 'jotai';
import type { ColorButtonLockProps } from './types';
import { LockCloseIcon, LockOpenIcon } from '../Icons';
import { ColorButtonLockContainer } from './styles';
import { storeColors } from '../../store/store';

export const ColorButtonLock: React.FC<
  ColorButtonLockProps
> = ({ color }) => {
  const setColors = useSetAtom(storeColors);

  const handleLock = () => {
    setColors((previousState) => {
      return previousState.map((previousStateColor) => {
        if (previousStateColor.id === color.id) {
          return {
            ...previousStateColor,
            isLocked: !previousStateColor.isLocked,
          };
        }

        return previousStateColor;
      });
    });
  };

  return (
    <ColorButtonLockContainer
      data-testid="ColorButtonLockContainer"
      onClick={handleLock}
    >
      {color?.isLocked ? (
        <LockCloseIcon />
      ) : (
        <LockOpenIcon />
      )}
    </ColorButtonLockContainer>
  );
};
