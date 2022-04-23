import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardGame from '../components/CardGame';
import { deckIds } from '../helpers/drawRandomCards';
import { customRender } from './context.test';

test('Game over', async () => {
  const value = {
    acesLeftCount: 0,
    currentDeck: {
      drawed: ['CJ', 'DQ', 'C2', 'C3', 'CK'],
      cardsLeft: deckIds.filter((id) => !['CJ', 'DQ', 'C2', 'C3', 'CK'].includes(id)),
    },
    draw: jest.fn(),
    reset: jest.fn(),
  };

  customRender(<CardGame />, { value });

  expect(screen.getByText('Game over')).toBeVisible();
});

test('Winner', async () => {
  const value = {
    acesLeftCount: 0,
    currentDeck: {
      drawed: ['CJ', 'DA'],
      cardsLeft: [],
    },
    draw: jest.fn(),
    reset: jest.fn(),
  };

  customRender(<CardGame />, { value });

  const icons = screen.getAllByRole('img');

  expect(icons.length).toEqual(5);
  expect(icons[0].getAttribute('src')).toBe('winner.svg');
});

test('Loser', async () => {
  const value = {
    acesLeftCount: 0,
    currentDeck: {
      drawed: ['CJ', 'DQ'],
      cardsLeft: [],
    },
    draw: jest.fn(),
    reset: jest.fn(),
  };

  customRender(<CardGame />, { value });

  expect(screen.getByText(/^You lose./)).toBeVisible();
});
