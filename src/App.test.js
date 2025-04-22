import { render, screen } from '@testing-library/react';
// imports render and screen from react testing library
import App from './App';
// imports app from  app.js

test('renders learn react link', () => {
  // to check if learn react is working problem
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // searching the link  elemt "learn react"
  expect(linkElement).toBeInTheDocument();
});
