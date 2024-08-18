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

      const groupSize = 2;
      const groupIndex = Math.floor(colorIndex / groupSize);
      const insertIndex = groupIndex * groupSize + 1;

      newState.splice(insertIndex, 0, {
        id: `${hex}-${Math.random()}`,
        hex,
        isLocked: false,
      });

      return newState;
    });
  };

  useEffect(() => {
    if (
      !isOpenedColorPicker &&
      color.id === colorProperty.id
    ) {
      setColors((previousState) => {
        return previousState.map((item) => {
          if (item.id === color.id) {
            return { ...item, hex: color.hex };
          }

          return item;
        });
      });
    }
  }, [
    color.hex,
    color.id,
    colorProperty.id,
    isOpenedColorPicker,
    setColors,
  ]);

  const isMaxColorCount = colorsLength >= 10;
  const isFirstElement = colorIndex === 0;
  const isLastElement = colorsLength - 1 === colorIndex;

  return (
    <ColorContainer
      ref={setNodeRef}
      backgroundColor={color?.hex}
      transform={CSS.Transform.toString(transform)}
      transition={transition}
    >
      {!isMaxColorCount && (
        <React.Fragment>
          {!isFirstElement && (
            <ColorBar
              top={0}
              right="auto"
              bottom="auto"
              left={0}
            >
              <CircleAdd
                top="-23px"
                left="-23px"
                onClick={handleAddColor}
              >
                <PlusIcon />
              </CircleAdd>
            </ColorBar>
          )}

          {!isLastElement && (
            <ColorBar
              top="auto"
              right={0}
              bottom={0}
              left="auto"
            >
              <CircleAdd
                top="23px"
                left="23px"
                onClick={handleAddColor}
              >
                <PlusIcon />
              </CircleAdd>
            </ColorBar>
          )}
        </React.Fragment>
      )}

      <ColorButtons
        color={color}
        colorsLength={colorsLength}
        dragAttributes={attributes}
        dragListeners={listeners}
      />

      <ColorText
        data-testid="ColorText"
        ref={colorNameReference}
        onClick={() => setIsOpenedColorPicker(true)}
      >
        {color?.hex?.toUpperCase()}
      </ColorText>

      {isOpenedColorPicker && (
        <ColorPickerWrapper
          ref={colorPickerWrapperReference}
          data-testid="ColorPickerWrapper"
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
