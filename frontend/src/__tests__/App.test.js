import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CARDS_COUNT, CARDS_DEAL_COUNT } from 'types';
import App from '../App';

test('CardGame is displayed', async () => {
  render(<App />);

  expect(screen.getByText(CARDS_COUNT - CARDS_DEAL_COUNT)).toBeVisible();
  expect(screen.getByText('Deal')).toBeVisible();
  expect(screen.getByText('Reset')).toBeVisible();

  expect(screen.getByTestId('cards-section').children.length).toEqual(CARDS_DEAL_COUNT);
});
