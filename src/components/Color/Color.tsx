import React, { useEffect, useRef, useState } from 'react';
import { ColorPicker } from 'react-pick-color';
import type { ColorProps } from './types';
import {
  ColorContainer,
  ColorPickerWrapper,
  ColorText,
} from './styles';
import { useOutsideClick } from '../../hooks';
import { ColorButtons } from '../ColorButtons/ColorButtons';

export const Color: React.FC<ColorProps> = ({
  color: colorProperty,
  setColors,
  colorsLength,
}) => {
  const [color, setColor] = useState('');
  const [isOpenedColorPicker, setIsOpenedColorPicker] =
    useState(false);

  const colorNameReference = useRef<HTMLDivElement>(null);
  const colorPickerWrapperReference =
    useRef<HTMLDivElement>(null);

  useOutsideClick(
    [colorNameReference, colorPickerWrapperReference],
    () => setIsOpenedColorPicker(false),
  );

  useEffect(() => {
    setColor(colorProperty);
  }, [colorProperty]);

  return (
    <ColorContainer backgroundColor={color}>
      <ColorButtons
        color={color}
        setColors={setColors}
        colorsLength={colorsLength}
      />

      <ColorText
        ref={colorNameReference}
        onClick={() => setIsOpenedColorPicker(true)}
      >
        {color.toUpperCase()}
      </ColorText>

      {isOpenedColorPicker && (
        <ColorPickerWrapper
          ref={colorPickerWrapperReference}
        >
          <ColorPicker
            color={color}
            onChange={({ hex }) => setColor(hex)}
          />
        </ColorPickerWrapper>
      )}
    </ColorContainer>
  );
};
