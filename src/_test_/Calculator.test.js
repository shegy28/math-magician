import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

test('expect home component to match snapshot', () => {
  const view = renderer.create(<Calculator />).toJSON();
  expect(view).toMatchSnapshot();
});

test('renders Lets Do Some Math', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/Let's Do Some Maths/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Ac in the UI', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
