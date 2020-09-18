import { render } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';
const mockData = {
  src: 'mock src',
  description: 'mock desc',
  price: 'mock price',
  title: 'mock title',
};

test('Card renders correctly', () => {
  const { asFragment } = render(<Card {...mockData} />);
  expect(asFragment()).toMatchSnapshot();
});
