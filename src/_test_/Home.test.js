import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom';

test('renders Welcome to our page!', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to our page!/i);
  expect(linkElement).toBeInTheDocument();
});

test('expect home component to match snapshot', () => {
  const view = renderer.create(<Home />).toJSON();
  expect(view).toMatchSnapshot();
});
