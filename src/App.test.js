import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container, getByText } = render(<App />);
    expect(container).toMatchSnapshot();
});
