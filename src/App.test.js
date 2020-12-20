import { render, screen } from '@testing-library/react';
import App from './App';

test('renders show location', () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Location/i);
  expect(linkElement).toBeInTheDocument();
});
