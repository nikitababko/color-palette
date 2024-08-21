import type { DraggableAttributes } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import type { ColorProps } from '../Color/types';

export type ColorButtonsProps = Pick<ColorProps, 'color' | 'colorsLength'> & {
  dragAttributes?: DraggableAttributes;
  dragListeners?: SyntheticListenerMap;
};
