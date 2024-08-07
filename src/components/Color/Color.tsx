import React, { useEffect, useRef, useState } from 'react';
import { ColorPicker } from 'react-pick-color';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSetAtom } from 'jotai';
import type { ColorProps } from './types';
import {
  CircleAdd,
  ColorBar,
  ColorContainer,
  ColorPickerWrapper,
  ColorText,
} from './styles';
import { useOutsideClick } from '../../hooks';
import { ColorButtons } from '../ColorButtons/ColorButtons';
import type { ColorType } from '../../store/types';
import { storeColors } from '../../store/store';
import { getRandomHexColor } from '../../helpers';
import { PlusIcon } from '../Icons';

export const Color: React.FC<ColorProps> = ({
  color: colorProperty,
  colorsLength,
  colorIndex,
}) => {
  const [color, setColor] = useState<ColorType>({
    id: `#ffffff-${Math.random()}`,
    hex: '#ffffff',
    isLocked: false,
  });

  const setColors = useSetAtom(storeColors);

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

  const handleAddColor = () => {
    setColors((previousState) => {
      const newState = [...previousState];
      const hex = getRandomHexColor();

      newState.splice(colorIndex, 0, {
        id: `${hex}-${Math.random()}`,
        hex,
        isLocked: false,
      });

      return newState;
    });
  };

  return (
    <ColorContainer
      ref={setNodeRef}
      backgroundColor={color?.hex}
      transform={CSS.Transform.toString(transform)}
      transition={transition}
    >
      {colorIndex !== 0 && (
        <ColorBar left={0} right="auto">
          <CircleAdd left="-23px" onClick={handleAddColor}>
            <PlusIcon />
          </CircleAdd>
        </ColorBar>
      )}

      <ColorBar left="auto" right={0}>
        <CircleAdd left="23px" onClick={handleAddColor}>
          <PlusIcon />
        </CircleAdd>
      </ColorBar>

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
