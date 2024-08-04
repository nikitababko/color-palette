import React, { useEffect, useRef, useState } from 'react';
import { ColorPicker } from 'react-pick-color';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { ColorProps } from './types';
import {
  ColorContainer,
  ColorPickerWrapper,
  ColorText,
} from './styles';
import { useOutsideClick } from '../../hooks';
import { ColorButtons } from '../ColorButtons/ColorButtons';
import type { ColorType } from '../../store/types';

export const Color: React.FC<ColorProps> = ({
  color: colorProperty,
  colorsLength,
}) => {
  const [color, setColor] = useState<ColorType>({
    id: `#ffffff-${Math.random()}`,
    hex: '#ffffff',
    isLocked: false,
  });
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

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: color.id });

  return (
    <ColorContainer
      ref={setNodeRef}
      backgroundColor={color?.hex}
      transform={CSS.Transform.toString(transform)}
      transition={transition}
    >
      <ColorButtons
        color={color}
        colorsLength={colorsLength}
        dragAttributes={attributes}
        dragListeners={listeners}
      />

      <ColorText
        ref={colorNameReference}
        onClick={() => setIsOpenedColorPicker(true)}
      >
        {color?.hex?.toUpperCase()}
      </ColorText>

      {isOpenedColorPicker && (
        <ColorPickerWrapper
          ref={colorPickerWrapperReference}
        >
          <ColorPicker
            color={color?.hex}
            onChange={({ hex }) =>
              setColor((previousState) => {
                return { ...previousState, hex };
              })
            }
          />
        </ColorPickerWrapper>
      )}
    </ColorContainer>
  );
};
