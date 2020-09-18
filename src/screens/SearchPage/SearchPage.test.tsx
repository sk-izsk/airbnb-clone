import { render } from '@testing-library/react';
import React from 'react';
import SearchPage from './SearchPage';

test('SearchPage renders correctly', () => {
  const { asFragment } = render(<SearchPage />);
  expect(asFragment()).toMatchSnapshot();
});
