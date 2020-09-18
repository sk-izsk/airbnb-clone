import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from './Footer';

test('Footer renders correctly', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
