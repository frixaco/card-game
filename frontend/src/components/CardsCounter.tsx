import React from 'react';

interface CardsCounterProps {
  acesLeftCount: number;
  cardsLeftCount: number;
}

const CardsCounter: React.FC<CardsCounterProps> = ({ acesLeftCount, cardsLeftCount }) => {
  return (
    <div className="relative px-2 py-5 sm:px-5 w-28 sm:w-46 flex flex-col items-center border bg-black text-white border-yellow-450">
      <span data-testid="cardsLeftCount" className="text-4xl">
        {cardsLeftCount}
      </span>
      <div className="capitalize whitespace-nowrap tracking-wider">Cards left</div>

      <div className="absolute -right-28 md:-right-36 top-1/6 bottom-1/6 p-1 w-28 md:w-36 h-4/6 flex flex-col items-center justify-center border-yellow-450 border bg-black text-white ">
        <span data-testid="acesLeftCount" className="text-xl">
          {acesLeftCount}
        </span>
        <div className="text-sm capitalize whitespace-nowrap tracking-wider">Aces left</div>
      </div>
    </div>
  );
};

export default CardsCounter;
