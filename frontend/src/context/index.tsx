import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { deck, drawRandomCards } from '../helpers/drawRandomCards';

export interface DeckActions {
  acesLeftCount: number;
  currentDeck: {
    drawed: string[];
    cardsLeft: string[];
  };
  draw: () => void;
  reset: () => void;
}

export const DeckActionsContext = createContext<DeckActions | undefined>(undefined);

/**
 * @param props children
 */
export const DeckProvider: React.FC = (props) => {
  // Both drawed and cardsLeft are arrays of card IDs (<suit><rank>)
  // I went with an object to store card info instead of an array,
  // I think this way, it's a bit more efficient when accessing any card object (O(1) and no looping)
  const [currentDeck, setCurrentDeck] = useState(() => drawRandomCards());
  const [acesLeftCount, setAcesLeftCount] = useState(4);

  useEffect(() => {
    const acesCounter = currentDeck.cardsLeft.reduce(
      (count, card) => (deck[card].rank === 'A' ? count + 1 : count),
      0
    );
    setAcesLeftCount(acesCounter);
  }, [currentDeck]);

  // Memoizing both draw and reset fns to help reduce unnecessary rerenders when passed around in components
  const draw = useCallback(() => {
    setCurrentDeck(drawRandomCards());
  }, []);

  const reset = useCallback(() => {
    // Prevent glitch during switching from lose screen to start screen
    setAcesLeftCount(4);
    setCurrentDeck(drawRandomCards(true));
  }, []);

  // Another, maybe better way would be to create another context where only draw and reset fns
  // are stored, that'll help to make the app a bit more optimized
  const value = useMemo(
    () => ({
      acesLeftCount,
      currentDeck,
      draw,
      reset,
    }),
    [acesLeftCount, currentDeck, draw, reset]
  );

  return <DeckActionsContext.Provider value={value} {...props} />;
};

/**
 * Custom hook to make it easier to use context provider value
 * @returns Provider value
 */
export const useDeck = () => {
  const context = useContext(DeckActionsContext);

  if (!context) {
    throw new Error(`useDeck should be used withing DeckProvider`);
  }

  return context;
};
