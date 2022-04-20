import React, { useEffect, useState } from 'react';
import winner from 'assets/icons/winner.svg';
import Card from 'components/Card';
import drawRandomCards, { deck } from 'helpers/drawRandomCards';

const App: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState(() => drawRandomCards());
  const [acesLeft, setAcesLeft] = useState(4);
  const [isWinner, setIsWinner] = useState(false);

  const gameOver = currentDeck.cardsLeft.length > 2 && acesLeft === 0;
  const gameEnd = currentDeck.cardsLeft.length === 0;

  useEffect(() => {
    const acesCounter = currentDeck.cardsLeft.reduce(
      (count, card) => (deck[card].rank === 'A' ? count + 1 : count),
      0
    );
    setAcesLeft(acesCounter);

    if (currentDeck.cardsLeft.length === 2) {
      if (currentDeck.cardsLeft.find((c) => deck[c].rank === 'A')) {
        setIsWinner(true);
      } else {
        setIsWinner(false);
      }
    }
  }, [currentDeck]);

  const handleDraw = () => {
    setCurrentDeck(drawRandomCards());
  };

  const handleReset = () => {
    setIsWinner(false);
    // Prevent glitch during lose => start
    setAcesLeft(4);
    setCurrentDeck(drawRandomCards(true));
  };

  return (
    <div className="h-screen py-10 lg:py-20 px-16 flex flex-col items-center bg-green-800">
      <div className="h-1/6 w-full flex items-center justify-center">
        <div className="px-2 py-5 sm:px-5 border bg-black text-white flex flex-col items-center border-yellow-450 w-28 sm:w-46 relative">
          <span className="text-4xl">{currentDeck.cardsLeft.length}</span>
          <div className="capitalize whitespace-nowrap tracking-wider">Cards left</div>

          <div className="absolute -right-28 md:-right-36 top-1/6 bottom-1/6 p-1 border bg-black text-white flex flex-col items-center justify-center border-yellow-450 w-28 md:w-36 h-4/6">
            <span className="text-xl">{acesLeft}</span>
            <div className="text-sm capitalize whitespace-nowrap tracking-wider">Aces left</div>
          </div>
        </div>
      </div>

      {gameEnd && isWinner && (
        <div>
          <img src={winner} alt="winner" />
        </div>
      )}

      <div className="h-3/6 w-full flex items-center sm:justify-center sm:flex-wrap overflow-auto select-none">
        {currentDeck.drawed.map((cardId) => (
          <Card key={cardId} cardId={cardId} />
        ))}
      </div>

      {gameOver && (
        <div className="h-2/6 w-full flex flex-col items-center justify-between">
          <h5 className="text-white text-3xl">Game over</h5>

          <button
            onClick={handleReset}
            type="button"
            className="px-6 py-2 text-2xl capitalize tracking-wider rounded-xl border-2 focus:outline-none text-yellow-450 border-yellow-450 select-none whitespace-nowrap"
          >
            Play again
          </button>
        </div>
      )}

      {gameEnd && isWinner && (
        <div className="h-2/6 w-full flex flex-col items-center justify-center">
          <button
            onClick={handleReset}
            type="button"
            className="px-6 py-2 text-2xl capitalize tracking-wider rounded-xl border-2 focus:outline-none text-yellow-450 border-yellow-450 select-none whitespace-nowrap"
          >
            Play again
          </button>
        </div>
      )}

      {gameEnd && !isWinner && (
        <div className="h-2/6 w-full flex flex-col items-center justify-around">
          <h5 className="text-center text-white text-3xl pb-10">
            You lose.
            <br />
            Better luck next time!
          </h5>

          <button
            onClick={handleReset}
            type="button"
            className="px-6 py-2 text-2xl capitalize tracking-wider rounded-xl border-2 focus:outline-none text-yellow-450 border-yellow-450 select-none whitespace-nowrap"
          >
            Play again
          </button>
        </div>
      )}

      {!gameOver && !gameEnd && (
        <div className="h-2/6 w-full flex flex-col items-center justify-end">
          <button
            onClick={handleDraw}
            type="button"
            className="w-56 md:w-80 h-20 md:h-28 text-5xl md:text-6xl uppercase tracking-wider rounded-xl focus:outline-none text-black bg-yellow-450 select-none"
          >
            Deal
          </button>

          <button
            onClick={handleReset}
            type="button"
            className="w-32 h-16 text-2xl tracking-wider rounded-xl border-2 focus:outline-none md:self-end text-yellow-450 border-yellow-450 select-none"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
