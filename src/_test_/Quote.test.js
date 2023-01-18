import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

test('renders /Mathematics is not about numbers...', () => {
  render(<Quote />);
  const linkElement = screen.getByText(/Mathematics is not about numbers, equations, computations, or algorithms:/i);
  expect(linkElement).toBeInTheDocument();
});

test('expect home component to match snapshot', () => {
  const view = renderer.create(<Quote />).toJSON();
  expect(view).toMatchSnapshot();
});
