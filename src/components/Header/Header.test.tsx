import { render } from '@testing-library/react';
import React from 'react';
import { Header } from './Header';

test('Header renders correctly', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
