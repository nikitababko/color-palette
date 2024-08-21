import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App Component', () => {
  it('renders the App component', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('ToolbarContainer')).toBeInTheDocument();
    expect(getByTestId('ColorsWrapperContainer')).toBeInTheDocument();
  });
});
