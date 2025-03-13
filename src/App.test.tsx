import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
//////add tests
test('renders the button element', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a button/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the card element', () => {
  render(<App />);
  const linkElement = screen.getByText(/CardTitle/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the dropdown element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Groceries/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the heroImage element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trees/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the heroImage element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trees/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the label element', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a label/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the radioButton element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Are you a robot?/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the table element', () => {
  render(<App />);
  const linkElement = screen.getByText(/TableName/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the text element', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a sentence/i);
  expect(linkElement).toBeInTheDocument();
});
