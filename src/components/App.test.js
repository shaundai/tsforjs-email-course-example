import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})
describe('App', () => {
  test('Renders main welcome page', () => {
    const { debug, getByText, getByTestId } = render(<App />);
    const headerText = getByText(/welcome/i);
    expect(headerText).toBeInTheDocument();
    });
})

console.error = jest.fn()
