import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
//////add tests
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TableName/i);
  expect(linkElement).toBeInTheDocument();
});
