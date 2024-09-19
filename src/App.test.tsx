import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list', () => {
  render(<App />);
  screen.debug();
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});
