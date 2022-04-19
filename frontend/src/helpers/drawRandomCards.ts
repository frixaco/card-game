import CloverIcon from 'assets/Clover.svg';
import DiamondIcon from 'assets/Diamond.svg';
import HeartIcon from 'assets/Heart.svg';
import SpadeIcon from 'assets/Spade.svg';
import { Card } from 'types';

function pickRandomNCards(arr: string[], n = 5) {
  let len = arr.length;

  const result: string[] = new Array(n);
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

export const suitIconMapping: { [suit: string]: string } = {
  C: CloverIcon,
  D: DiamondIcon,
  H: HeartIcon,
  S: SpadeIcon,
};

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
    const drawed = pickRandomNCards(reset ? deckIds : cardsLeft);
    cardsLeft = (reset ? deckIds : cardsLeft).filter((cardId) => !drawed.includes(cardId));
    return {
      drawed,
      cardsLeft,
    };
  };
}

const drawRandomCards = memoizedCardDrawer();

export default drawRandomCards;
