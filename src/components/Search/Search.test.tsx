import { render } from '@testing-library/react';
import React from 'react';
import { Search } from './Search';

test('Search renders correctly', () => {
  const { asFragment } = render(<Search />);
  expect(asFragment()).toMatchSnapshot();
});
