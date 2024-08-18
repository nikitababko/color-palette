import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createStore, Provider } from 'jotai';
import { ColorsWrapper } from './ColorsWrapper';
import { storeColors } from '../../store/store';
import type { ColorType } from '../../store/types';

vi.mock('../Color', () => ({
  Color: ({
    color,
  }: {
    color: {
      id: string;
    };
  }) => <div>{color.id}</div>,
}));

const testStore = createStore();

const renderWithStore = (initialColors: ColorType[]) => {
  testStore.set(storeColors, initialColors);
  return render(
    <Provider store={testStore}>
      <ColorsWrapper />
    </Provider>,
  );
};

describe('ColorsWrapper Component', () => {
  it('should render the ColorsWrapper and display all colors', () => {
    const colors = [
      {
        id: `#FF0000-${Math.random()}`,
        hex: '#FF0000',
        isLocked: false,
      },
      {
        id: `#00FF00-${Math.random()}`,
        hex: '#00FF00',
        isLocked: false,
      },
      {
        id: `#0000FF-${Math.random()}`,
        hex: '#0000FF',
        isLocked: false,
      },
    ];

    renderWithStore(colors);

    for (const color of colors) {
      expect(
        screen.getByText(color.id),
      ).toBeInTheDocument();
    }
  });

  it('should handle drag and drop correctly', () => {
    const colors = [
      {
        id: `#FF0000-${Math.random()}`,
        hex: '#FF0000',
        isLocked: false,
      },
      {
        id: `#00FF00-${Math.random()}`,
        hex: '#00FF00',
        isLocked: false,
      },
      {
        id: `#0000FF-${Math.random()}`,
        hex: '#0000FF',
        isLocked: false,
      },
    ];

    renderWithStore(colors);

    fireEvent.dragEnd(screen.getByText(colors[0].id));

    const updatedColors = [colors[1], colors[2], colors[0]];

    for (const color of updatedColors) {
      expect(
        screen.getByText(color.id),
      ).toBeInTheDocument();
    }
  });
});
