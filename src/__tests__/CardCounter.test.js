import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardsCounter from '../components/CardsCounter';

test('CardCounter displays cards left and aces left', async () => {
  render(<CardsCounter acesLeftCount={4} cardsLeftCount={42} />);

  expect(screen.getByText('Aces left')).toBeVisible();
  expect(screen.getByTestId('acesLeftCount')).toHaveTextContent('4');

  expect(screen.getByText('Cards left')).toBeVisible();
  expect(screen.getByTestId('cardsLeftCount')).toHaveTextContent('42');
});
