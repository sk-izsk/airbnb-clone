import { render } from '@testing-library/react';
import React from 'react';
import { Banner } from './Banner';

test('Banner renders correctly', () => {
  const { asFragment } = render(<Banner />);
  expect(asFragment()).toMatchSnapshot();
});
