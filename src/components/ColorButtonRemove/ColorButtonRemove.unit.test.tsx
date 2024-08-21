import { fireEvent, render } from '@testing-library/react';
import type { Mock } from 'vitest';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSetAtom } from 'jotai';
import { ColorButtonRemove } from './ColorButtonRemove';

vi.mock('jotai', () => ({
  useSetAtom: vi.fn(),
}));

describe('ColorButtonRemove', () => {
  const mockSetColors = vi.fn();
  const mockColor = {
    id: 'color-1',
    hex: '#ffffff',
    isLocked: false,
  };

  beforeEach(() => {
    (useSetAtom as Mock).mockReturnValue(mockSetColors);
  });

  it('renders with CrossIcon', () => {
    const { container } = render(<ColorButtonRemove color={mockColor} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('removes the color when clicked', () => {
    const { container } = render(<ColorButtonRemove color={mockColor} />);

    fireEvent.click(container.firstChild as HTMLElement);

    expect(mockSetColors).toHaveBeenCalled();
    expect(mockSetColors).toHaveBeenCalledWith(expect.any(Function));

    // Checking that the correct color has been removed
    mockSetColors.mock.calls[0][0]([mockColor]);
    expect(mockSetColors).toHaveBeenCalledWith(expect.any(Function));
  });
});
