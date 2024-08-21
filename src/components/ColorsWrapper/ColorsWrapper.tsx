import React from 'react';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import { DndContext } from '@dnd-kit/core';
import { useAtom } from 'jotai';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';
import { storeColors } from '../../store/store';
import { Color } from '../Color';
import { ColorsWrapperContainer } from './styles';

export const ColorsWrapper: React.FC = () => {
  const [colors, setColors] = useAtom(storeColors);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setColors((previousState) => {
      const fromIndex = previousState.findIndex((item) => item.id === active.id);

      const toIndex = over ? previousState.findIndex((item) => item.id === over.id) : -1;

      if (fromIndex === -1 || toIndex === -1) {
        return previousState;
      }

      return arrayMove(previousState, fromIndex, toIndex);
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={colors}>
        <ColorsWrapperContainer data-testid="ColorsWrapperContainer">
          {colors.map((color, index) => (
            <Color
              key={color.id}
              color={{ ...color }}
              colorIndex={index}
              colorsLength={colors.length}
            />
          ))}
        </ColorsWrapperContainer>
      </SortableContext>
    </DndContext>
  );
};
