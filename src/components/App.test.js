import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})

test('renders welcome page', () => {
  const { debug, getByText, getByTestId } = render(<App />);
  const headerText = getByText(/welcome/i);
  expect(headerText).toBeInTheDocument();

  expect(getByTestId('welcome').textContent).toBe(`Welcome, !`)
});

console.error = jest.fn()

test('app exists', () => {
  render(<App />)
  expect(console.error).not.toHaveBeenCalled()
})

const userInfo = {
  firstName: 'Fred'
}

