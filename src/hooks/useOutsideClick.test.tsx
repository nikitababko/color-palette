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
    const onOutsideClick = vi.fn(); // создаем мок-функцию

    const { getByTestId } = render(
      <TestComponent onOutsideClick={onOutsideClick} />,
    );

    // Имитация клика внутри первого элемента, коллбэк не должен вызываться
    fireEvent.mouseDown(getByTestId('inside1'));
    expect(onOutsideClick).not.toHaveBeenCalled();

    // Имитация клика внутри второго элемента, коллбэк не должен вызываться
    fireEvent.mouseDown(getByTestId('inside2'));
    expect(onOutsideClick).not.toHaveBeenCalled();

    // Имитация клика за пределами элементов, коллбэк должен вызываться
    fireEvent.mouseDown(getByTestId('outside'));
    expect(onOutsideClick).toHaveBeenCalled();
  });
});
