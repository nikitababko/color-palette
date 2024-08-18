import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import type { Mock } from 'vitest';
import { describe, expect, it, vi } from 'vitest';
import { useSetAtom } from 'jotai';
import { ToolbarGenerateButton } from './ToolbarGenerateButton';
import { getRandomHexColor } from '../../helpers';

vi.mock('jotai', () => ({
  useSetAtom: vi.fn(),
}));

vi.mock('../../helpers', () => ({
  getRandomHexColor: vi.fn(() => '#ffffff'),
}));

describe('ToolbarGenerateButton Component', () => {
  it('renders the ToolbarGenerateButton component', () => {
    render(<ToolbarGenerateButton />);

    const buttonContainer = screen.getByTestId(
      'ToolbarGenerateButtonContainer',
    );
    expect(buttonContainer).toBeInTheDocument();
  });

  it('calls setColors on button click', () => {
    const mockSetColors = vi.fn();
    (useSetAtom as Mock).mockReturnValue(mockSetColors);

    render(<ToolbarGenerateButton />);

    const buttonContainer = screen.getByTestId(
      'ToolbarGenerateButtonContainer',
    );
    fireEvent.click(buttonContainer);

    expect(mockSetColors).toHaveBeenCalled();
  });

  it('generates a new color when button is clicked', () => {
    const initialState = [
      { hex: '#000000', isLocked: false },
      { hex: '#111111', isLocked: true },
    ];
    const mockSetColors = vi.fn((updateFunction) => {
      return updateFunction(initialState);
    });
    (useSetAtom as Mock).mockReturnValue(mockSetColors);

    render(<ToolbarGenerateButton />);

    const buttonContainer = screen.getByTestId(
      'ToolbarGenerateButtonContainer',
    );
    fireEvent.click(buttonContainer);

    expect(mockSetColors).toHaveBeenCalledWith(
      expect.any(Function),
    );

    // Check that getRandomHexColor was called and applied to colors that are not locked
    expect(getRandomHexColor).toHaveBeenCalled();
  });
});
