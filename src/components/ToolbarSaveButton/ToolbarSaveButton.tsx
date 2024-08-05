import React, { useState } from 'react';
import { useAtomValue } from 'jotai';
import { storeColors } from '../../store/store';
import { SaveIcon } from '../Icons';
import { ToolbarButton } from '../ToolbarButton';

export const ToolbarSaveButton: React.FC = () => {
  const colors = useAtomValue(storeColors);
  const [hasLocalStorageColors, setHasLocalStorageColors] =
    useState(localStorage.getItem('colors') || false);

  const handleSave = () => {
    if (hasLocalStorageColors) {
      localStorage.removeItem('colors');
    } else {
      localStorage.setItem(
        'colors',
        JSON.stringify(colors),
      );
    }

    setHasLocalStorageColors(
      (previousState) => !previousState,
    );
  };

  return (
    <ToolbarButton
      onClick={handleSave}
      leftSide={<SaveIcon />}
      label={`${hasLocalStorageColors ? 'Unsave' : 'Save'} palette`}
    />
  );
};
