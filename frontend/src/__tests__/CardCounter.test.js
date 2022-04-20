import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsCounter from '../components/CardsCounter';

test('CardCounter displays cards left and aces left', async () => {
  render(<CardsCounter acesLeftCount={4} cardsLeftCount={42} />);

  expect(screen.getByText(4)).toBeVisible();
  expect(screen.getByText('Aces left')).toBeVisible();

  expect(screen.getByText(42)).toBeVisible();
  expect(screen.getByText('Cards left')).toBeVisible();
});
