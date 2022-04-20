import React, { useCallback, useEffect, useState } from 'react';
import winner from 'assets/icons/winner.svg';
import Card from 'components/Card';
import CardsCounter from 'components/CardsCounter';
import GameControls from 'components/GameControls';
import SecondaryButton from 'components/common/SecondryButton';
import { useDeck } from 'context';
import { deck } from 'helpers/drawRandomCards';

const CardGame: React.FC = () => {
  const [isWinner, setIsWinner] = useState(false);

  const { currentDeck, acesLeftCount, draw, reset } = useDeck();

  const gameOver = currentDeck.cardsLeft.length > 2 && acesLeftCount === 0;
  const noCardsLeft = currentDeck.cardsLeft.length === 0;

  useEffect(() => {
    if (currentDeck.cardsLeft.length === 0) {
      if (currentDeck.drawed.find((c) => deck[c].rank === 'A')) {
        setIsWinner(true);
      } else {
        setIsWinner(false);
      }
    }
  }, [currentDeck]);

  const handleDraw = useCallback(() => {
    draw();
  }, [draw]);

  const handleReset = useCallback(() => {
    setIsWinner(false);
    reset();
  }, [reset]);

  return (
    <div className="h-screen py-10 lg:py-20 px-16 flex flex-col items-center bg-green-800 select-none">
      <div className="w-full flex items-center justify-center">
        <CardsCounter acesLeftCount={acesLeftCount} cardsLeftCount={currentDeck.cardsLeft.length} />
      </div>

      {noCardsLeft && isWinner && (
        <div>
          <img src={winner} alt="winner" />
        </div>
      )}

      <div className="w-full flex-1 flex items-center justify-center flex-wrap">
        {currentDeck.drawed.map((cardId) => (
          <Card key={cardId} cardId={cardId} />
        ))}
      </div>

      {gameOver && (
        <div className="w-full flex flex-col items-center justify-between">
          <h5 className="mb-8 text-white tracking-widest text-4xl ">Game over</h5>

          <SecondaryButton text="Play again" onClick={handleReset} />
        </div>
      )}

      {noCardsLeft && isWinner && (
        <div className="w-full flex flex-col items-center justify-center">
          <SecondaryButton text="Play again" onClick={handleReset} />
        </div>
      )}

      {noCardsLeft && !isWinner && (
        <div className="w-full flex flex-col items-center justify-around">
          <h5 className="text-center text-white text-3xl pb-10">
            You lose.
            <br />
            Better luck next time!
          </h5>

          <SecondaryButton text="Play again" onClick={handleReset} />
        </div>
      )}

      {!gameOver && !noCardsLeft && (
        <GameControls handleDraw={handleDraw} handleReset={handleReset} />
      )}
    </div>
  );
};

export default CardGame;
