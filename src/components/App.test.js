import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})

test('renders welcome page', () => {
  const { getByText } = render(<App />);
  const headerText = getByText(/welcome/i);
  expect(headerText).toBeInTheDocument();
});

console.error = jest.fn()

test('app exists', () => {
  render(<App />)
  expect(console.error).not.toHaveBeenCalled()
})

const userInfo = {
  firstName: 'Fred'
}

test('original api call happened', () => {
  const { debug, getByTestId, getByDisplayValue } = render(<App />)
  expect(getByTestId('welcome')).toBe('hi')
  debug()
})
