import CloverIcon from 'assets/icons/Clover.svg';
import DiamondIcon from 'assets/icons/Diamond.svg';
import HeartIcon from 'assets/icons/Heart.svg';
import SpadeIcon from 'assets/icons/Spade.svg';
import { Card } from 'types';

/**
 *
 * @param arr Array to pick from
 * @param n Number of elements to pick (default = 5)
 * @returns Array of `n` elements
 */
function pickRandomNElements<T>(arr: T[], n = 5) {
  let len = arr.length;

  const result: T[] = new Array(n);
  const taken = new Array(len);

  if (n > len) return arr;

  let times = n - 1;
  while (times > -1) {
    const x = Math.floor(Math.random() * len);

    result[times] = arr[x in taken ? taken[x] : x];

    len -= 1;
    taken[x] = len in taken ? taken[len] : len;

    times -= 1;
  }

  return result;
}

/**
 * @property `key` - Card suit
 * @property `value` - SVG icon path
 */
export const suitIconMapping: { [suit: string]: string } = {
  C: CloverIcon,
  D: DiamondIcon,
  H: HeartIcon,
  S: SpadeIcon,
};

/**
 * Generate deck of 52 cards, where each `key` is an ID - "\<suit\>\<rank\>"
 *
 * Each `value` is an object that contains card's `suit`, `rank` and `color`
 * @returns Deck object and array of card IDs
 */
function generateDeck() {
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;
  const suits = ['C', 'D', 'H', 'S'] as const;

  const deckIds: string[] = [];
  const deck = {} as { [id: string]: Card };

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      const id = suit + rank;
      deckIds.push(id);

      deck[id] = {
        suit,
        rank,
        color: suit === 'D' || suit === 'H' ? 'red' : 'black',
      };
    });
  });

  return { deck, deckIds };
}

export const { deck, deckIds } = generateDeck();

function memoizedCardDrawer() {
  let cardsLeft = deckIds;

  return (reset = false) => {
    const drawed = pickRandomNElements(reset ? deckIds : cardsLeft);
    cardsLeft = (reset ? deckIds : cardsLeft).filter((cardId) => !drawed.includes(cardId));
    return {
      drawed,
      cardsLeft,
    };
  };
}

/**
 * Function to handle card deals
 *
 * - Keeps tracks of cards left
 * - Resets or updates cards left
 */
export const drawRandomCards = memoizedCardDrawer();
