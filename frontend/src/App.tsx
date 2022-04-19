import React, { useEffect, useState } from 'react';
import Card from 'components/Card';
import drawRandomCards, { deck } from 'helpers/drawRandomCards';

const App: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState(() => drawRandomCards());
  const [acesLeft, setAcesLeft] = useState(4);

  useEffect(() => {
    setAcesLeft(
      currentDeck.cardsLeft.reduce(
        (count, card) => (deck[card].rank === 'A' ? count + 1 : count),
        0
      )
    );
  }, [currentDeck]);

  const handleDraw = () => {
    setCurrentDeck(drawRandomCards());
  };

  const handleReset = () => {
    setCurrentDeck(drawRandomCards(true));
  };

  return (
    <div className="h-screen py-10 lg:py-20 px-16 flex flex-col items-center bg-green-800">
      <div className="h-1/6 w-full flex items-center justify-center">
        <div className="px-2 py-5 sm:px-5 border bg-black text-white flex flex-col items-center border-yellow-450 w-28 sm:w-46 relative">
          <span className="text-4xl">{currentDeck.cardsLeft.length}</span>
          <div className="capitalize whitespace-nowrap tracking-wider">Cards left</div>

          {/* ACES COUNTER OPTION #1 */}
          <div className="absolute -right-28 md:-right-36 top-1/6 bottom-1/6 p-1 border bg-black text-white flex flex-col items-center justify-center border-yellow-450 w-28 md:w-36 h-4/6">
            <span className="text-xl">{acesLeft}</span>
            <div className="text-sm capitalize whitespace-nowrap tracking-wider">Aces left</div>
          </div>
        </div>
      </div>

      <div className="h-4/6 w-full flex items-center sm:justify-center sm:flex-wrap overflow-auto">
        {currentDeck.drawed.map((cardId) => (
          <Card key={cardId} cardId={cardId} />
        ))}
      </div>

      <div className="h-1/6 w-full flex flex-col items-center justify-between">
        <button
          onClick={handleDraw}
          type="button"
          className="w-56 md:w-80 h-20 md:h-28 text-5xl md:text-6xl uppercase tracking-wider rounded-xl focus:outline-none text-black bg-yellow-450"
        >
          Deal
        </button>

        {/* ACES COUNTER OPTION #2 */}
        {/* <div className="flex items-center justify-between w-full">
          <div className="w-32 h-16 border bg-black text-white flex flex-col items-center justify-center border-yellow-450">
            <span className="text-xl">{acesLeft}</span>
            <div className="text-sm capitalize whitespace-nowrap tracking-wider">Aces left</div>
          </div> */}

        <button
          onClick={handleReset}
          type="button"
          className="w-32 h-16 text-2xl tracking-wider rounded-xl border-2 focus:outline-none md:self-end text-yellow-450 border-yellow-450"
        >
          Reset
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
