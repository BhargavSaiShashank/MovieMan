import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Welcome to MovieMan/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
