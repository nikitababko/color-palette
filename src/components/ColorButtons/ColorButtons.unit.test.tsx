import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ColorButtons } from './ColorButtons';

describe('ColorButtons', () => {
  const mockColor = {
    id: '1',
    hex: '#ffffff',
    isLocked: false,
  };

  it('renders ColorButtonCopy and ColorButtonLock by default', () => {
    render(
      <ColorButtons color={mockColor} colorsLength={1} />,
    );

    expect(
      screen.getByTestId('ColorButtonCopyContainer'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('ColorButtonLockContainer'),
    ).toBeInTheDocument();
  });

  it('renders ColorButtonRemove if colorsLength is greater than 2', () => {
    render(
      <ColorButtons color={mockColor} colorsLength={3} />,
    );

    expect(
      screen.getByTestId('ColorButtonRemoveContainer'),
    ).toBeInTheDocument();
  });

  it('does not render ColorButtonRemove if colorsLength is less than or equal to 2', () => {
    render(
      <ColorButtons color={mockColor} colorsLength={2} />,
    );

    expect(
      screen.queryByTestId('color-button-remove'),
    ).not.toBeInTheDocument();
  });

  it('renders ColorButtonDrag with correct props', () => {
    render(
      <ColorButtons color={mockColor} colorsLength={3} />,
    );

    expect(
      screen.getByTestId('color-button-drag'),
    ).toBeInTheDocument();
  });
});
