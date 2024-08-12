import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import type { Mock } from 'vitest';
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { useSetAtom } from 'jotai';
import { Color } from './Color';
import type { ColorType } from '../../store/types';

const mockColorHex = '#FF0000';

vi.mock('jotai', () => ({
  useSetAtom: vi.fn(),
}));

describe('Color Component', () => {
  const mockSetColors = vi.fn();
  const mockColor: ColorType = {
    id: `${mockColorHex}-123456789`,
    hex: mockColorHex,
    isLocked: false,
  };

  beforeEach(() => {
    (useSetAtom as Mock).mockReturnValue(mockSetColors);
  });

  it('renders the Color component', () => {
    render(
      <Color
        color={mockColor}
        colorsLength={5}
        colorIndex={1}
      />,
    );

    expect(
      screen.getByText(mockColorHex),
    ).toBeInTheDocument();
  });

  it('calls setColors with the correct value when adding a color', () => {
    render(
      <Color
        color={mockColor}
        colorsLength={5}
        colorIndex={1}
      />,
    );

    const addButton = screen.getAllByRole('button')[0];
    fireEvent.click(addButton);

    expect(mockSetColors).toHaveBeenCalled();
  });
});
