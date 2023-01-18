import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Home';
import '@testing-library/jest-dom';

test('expects role to have Heading', () => {
  render(<Nav />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});

test('expect home component to match snapshot', () => {
  const view = renderer.create(<Nav />).toJSON();
  expect(view).toMatchSnapshot();
});
