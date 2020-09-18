import { render } from '@testing-library/react';
import React from 'react';
import { SearchResult } from './SearchResult';
const mockData = {
  img: 'mock src',
  description: 'mock desc',
  price: 'mock price',
  title: 'mock title',
  star: 5,
  location: 'mock location',
  total: 'mock total',
};
test('SearchResult renders correctly', () => {
  const { asFragment } = render(<SearchResult {...mockData} />);
  expect(asFragment()).toMatchSnapshot();
});
