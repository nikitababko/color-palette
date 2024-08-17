import React, { useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useOutsideClick } from './useOutsideClick';

const TestComponent: React.FC<{
  onOutsideClick: () => void;
}> = ({ onOutsideClick }) => {
  const reference1 = useRef<HTMLDivElement>(null);
  const reference2 = useRef<HTMLDivElement>(null);

  useOutsideClick([reference1, reference2], onOutsideClick);

  return (
    <div>
      <div data-testid="inside1" ref={reference1}>
        Inside 1
      </div>

      <div data-testid="inside2" ref={reference2}>
        Inside 2
      </div>

      <div data-testid="outside">Outside</div>
    </div>
  );
};

describe('useOutsideClick hook', () => {
  it('calls callback when click is outside the referenced elements', () => {
    const onOutsideClick = vi.fn();

    const { getByTestId } = render(
      <TestComponent onOutsideClick={onOutsideClick} />,
    );

    // Simulate a click inside the first element, the callback should not be called
    fireEvent.mouseDown(getByTestId('inside1'));
    expect(onOutsideClick).not.toHaveBeenCalled();

    // Simulate a click inside the first element, the callback should not be called
    fireEvent.mouseDown(getByTestId('inside2'));
    expect(onOutsideClick).not.toHaveBeenCalled();

    // Simulate a click inside the first element, the callback should not be called
    fireEvent.mouseDown(getByTestId('outside'));
    expect(onOutsideClick).toHaveBeenCalled();
  });
});
