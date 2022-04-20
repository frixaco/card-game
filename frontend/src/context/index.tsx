import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { deck, drawRandomCards } from 'helpers/drawRandomCards';

export interface CardGameActionsContext {
  acesLeftCount: number;
  currentDeck: {
    drawed: string[];
    cardsLeft: string[];
  };
  draw: () => void;
  reset: () => void;
}

export const DeckActionsContext = createContext<CardGameActionsContext | undefined>(undefined);

export const DeckProvider: FC = (props) => {
  const [currentDeck, setCurrentDeck] = useState(() => drawRandomCards());
  const [acesLeftCount, setAcesLeftCount] = useState(4);

  useEffect(() => {
    const acesCounter = currentDeck.cardsLeft.reduce(
      (count, card) => (deck[card].rank === 'A' ? count + 1 : count),
      0
    );
    setAcesLeftCount(acesCounter);
  }, [currentDeck]);

  const draw = useCallback(() => {
    setCurrentDeck(drawRandomCards());
  }, []);

  const reset = useCallback(() => {
    // Prevent glitch during lose => start
    setAcesLeftCount(4);
    setCurrentDeck(drawRandomCards(true));
  }, []);

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

export const useDeck = () => {
  const context = useContext(DeckActionsContext);

  if (!context) {
    throw new Error(`useDeck should be used withing DeckProvider`);
  }

  return context;
};
