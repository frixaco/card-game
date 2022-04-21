import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardGame from '../components/CardGame';
import { DeckProvider } from '../context';
import { deckIds } from '../helpers/drawRandomCards';

const customRender = (children, { value, ...renderOptions }) => {
  return render(<DeckProvider value={value}>{children}</DeckProvider>, renderOptions);
};

test('App shows currentDeck and drawed cards from provider', async () => {
  const value = {
    acesLeftCount: 2,
    currentDeck: {
      drawed: ['CA', 'DA', 'C2', 'C3', 'CK'],
      cardsLeft: jest
        .fn()
        .mockImplementation(() =>
          deckIds.filter((id) => !['CA', 'DA', 'C2', 'C3', 'CK'].includes(id))
        ),
    },
    draw: jest.fn(),
    reset: jest.fn(),
  };

  customRender(<CardGame />, { value });

  await waitFor(() =>
    expect(screen.getByTestId('acesLeftCount')).toHaveTextContent(value.acesLeftCount.toString())
  );

  await waitFor(() =>
    expect(screen.getByTestId('cardsLeftCount')).toHaveTextContent(
      value.currentDeck.cardsLeft.length.toString()
    )
  );
});
