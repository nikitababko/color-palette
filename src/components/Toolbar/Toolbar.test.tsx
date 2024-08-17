import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Toolbar } from './Toolbar';

describe('Toolbar Component', () => {
  it('renders the Toolbar component', () => {
    render(<Toolbar />);

    const toolbarContainer = screen.getByTestId(
      'ToolbarContainer',
    );
    expect(toolbarContainer).toBeInTheDocument();
  });

  it('contains the ToolbarGenerateButton', () => {
    render(<Toolbar />);

    const generateButton = screen.getByTestId(
      'ToolbarGenerateButtonContainer',
    );
    expect(generateButton).toBeInTheDocument();
  });
});
