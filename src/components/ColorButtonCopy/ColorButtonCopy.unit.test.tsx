import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ColorButtonCopy } from './ColorButtonCopy';

describe('ColorButtonCopy Component', () => {
  const mockColor = {
    id: '#ffffff-123456789',
    hex: '#ffffff',
    isLocked: false,
  };

  beforeEach(() => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.append(root);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValueOnce(true),
      },
    });
  });

  it('renders the component and copies the color to clipboard', async () => {
    render(<ColorButtonCopy color={mockColor} />);

    const copyButton = screen.getByTestId('ColorButtonCopyContainer');

    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockColor.hex);

    expect(await screen.findByText(/color copied to the clipboard/i)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByText(/color copied to the clipboard/i)).not.toBeInTheDocument();
      },
      {
        timeout: 3000,
      },
    );
  });
});
