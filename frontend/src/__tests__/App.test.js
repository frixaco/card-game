import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CARDS_COUNT, CARDS_DEAL_COUNT } from 'types';
import App from '../App';

test('Cards and counters match. Counters update Deal and Reset clicked', async () => {
  render(<App />);

  expect(screen.getByTestId('cards-section').children.length).toEqual(CARDS_DEAL_COUNT);

  fireEvent.click(screen.getByText('Deal'));

  await waitFor(() =>
    expect(screen.getByTestId('cardsLeftCount')).toHaveTextContent(
      (CARDS_COUNT - 2 * CARDS_DEAL_COUNT).toString()
    )
  );

  const acesCountAfterDraw =
    4 -
    Array.from(screen.getByTestId('cards-section').childNodes)
      .map((card) => card.querySelector('span'))
      .map((span) => span.textContent)
      .filter((rank) => rank === 'A').length;

  // TODO: occasionally fails
  await waitFor(() =>
    expect(screen.getByTestId('acesLeftCount')).toHaveTextContent(acesCountAfterDraw.toString())
  );

  fireEvent.click(screen.getByText('Reset'));

  await waitFor(() =>
    expect(screen.getByTestId('cardsLeftCount')).toHaveTextContent(
      (CARDS_COUNT - CARDS_DEAL_COUNT).toString()
    )
  );

  const acesCountAfterReset =
    4 -
    Array.from(screen.getByTestId('cards-section').childNodes)
      .map((card) => card.querySelector('span'))
      .map((span) => span.textContent)
      .filter((rank) => rank === 'A').length;

  // TODO: occasionally fails
  await waitFor(() =>
    expect(screen.getByTestId('acesLeftCount')).toHaveTextContent(acesCountAfterReset.toString())
  );
});
