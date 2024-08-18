import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { DraggableAttributes } from '@dnd-kit/core';
import { ColorButtonDrag } from './ColorButtonDrag';

describe('ColorButtonDrag', () => {
  const mockDragListeners = {
    onMouseDown: vi.fn(),
    onTouchStart: vi.fn(),
  };

  const mockDragAttributes = {
    role: 'button',
  };

  it('renders correctly', () => {
    const { getByRole } = render(
      <ColorButtonDrag
        dragListeners={mockDragListeners}
        dragAttributes={
          mockDragAttributes as DraggableAttributes
        }
      />,
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('passes dragListeners and dragAttributes props', () => {
    const { getByRole } = render(
      <ColorButtonDrag
        dragListeners={mockDragListeners}
        dragAttributes={
          mockDragAttributes as DraggableAttributes
        }
      />,
    );

    const buttonElement = getByRole('button');

    buttonElement.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true }),
    );
    expect(
      mockDragListeners.onMouseDown,
    ).toHaveBeenCalled();

    buttonElement.dispatchEvent(
      new TouchEvent('touchstart', { bubbles: true }),
    );
    expect(
      mockDragListeners.onTouchStart,
    ).toHaveBeenCalled();

    expect(buttonElement).toHaveAttribute('role', 'button');
  });

  it('renders DragIcon inside', () => {
    const { container } = render(
      <ColorButtonDrag
        dragListeners={mockDragListeners}
        dragAttributes={
          mockDragAttributes as DraggableAttributes
        }
      />,
    );

    expect(
      container.querySelector('svg'),
    ).toBeInTheDocument();
  });
});
