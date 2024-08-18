import { fireEvent, render } from '@testing-library/react';
import type { Mock } from 'vitest';
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { useSetAtom } from 'jotai';
import { ColorButtonLock } from './ColorButtonLock';

vi.mock('jotai', () => ({
  useSetAtom: vi.fn(),
}));

describe('ColorButtonLock', () => {
  const mockSetColors = vi.fn();
  const mockColor = {
    id: 'color-1',
    hex: '#ffffff',
    isLocked: false,
  };

  beforeEach(() => {
    (useSetAtom as Mock).mockReturnValue(mockSetColors);
  });

  it('renders with LockOpenIcon when color is unlocked', () => {
    const { container } = render(
      <ColorButtonLock color={mockColor} />,
    );
    expect(
      container.querySelector('svg'),
    ).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('renders with LockCloseIcon when color is locked', () => {
    const lockedColor = { ...mockColor, isLocked: true };
    const { container } = render(
      <ColorButtonLock color={lockedColor} />,
    );
    expect(
      container.querySelector('svg'),
    ).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('toggles the lock state when clicked', () => {
    const { container } = render(
      <ColorButtonLock color={mockColor} />,
    );

    fireEvent.click(container.firstChild as HTMLElement);

    expect(mockSetColors).toHaveBeenCalled();
    expect(mockSetColors).toHaveBeenCalledWith(
      expect.any(Function),
    );
  });
});
