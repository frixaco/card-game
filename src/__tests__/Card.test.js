import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

test('Card displays card rank and icons', async () => {
  render(<Card cardId="C7" />);

  expect(screen.getByText(7)).toBeVisible();

  const icons = screen.getAllByRole('img');

  expect(icons.length).toEqual(2);
  expect(icons[0].getAttribute('src')).toBe('Clover.svg');
  expect(icons[1].getAttribute('src')).toBe('Clover.svg');
});
