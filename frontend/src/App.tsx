import React, { useState } from 'react';
import Card from 'components/Card';
import drawRandomCards from 'helpers/drawRandomCards';

const App: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState(() => drawRandomCards());

  const handleDraw = () => {
    setCurrentDeck(drawRandomCards());
  };

  const handleReset = () => {
    setCurrentDeck(drawRandomCards(true));
  };

  return (
    <div className="h-screen py-10 lg:py-20 px-12 flex flex-col items-center bg-green-800">
      <div className="h-1/6 w-full flex items-center justify-center">
        <div className="p-5 border bg-black text-white flex flex-col items-center border-yellow-450 w-46">
          <span className="text-4xl">{currentDeck.cardsLeft.length}</span>
          <div className="capitalize whitespace-nowrap tracking-wider">Cards left</div>
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

        <button
          onClick={handleReset}
          type="button"
          className="w-28 h-14 text-xl tracking-wider rounded-xl border-2 focus:outline-none md:self-end text-yellow-450 border-yellow-450"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
