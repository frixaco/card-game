import { deck, suitIconMapping } from 'helpers/drawRandomCards';

interface CardProps {
  cardId: string;
}

function Card({ cardId }: CardProps) {
  const { suit, rank, color } = deck[cardId];
  const icon = suitIconMapping[suit];

  return (
    <div
      className={`bg-white m-2 p-8 rounded-3xl flex flex-col justify-between min-w-36 md:w-48 h-48 md:h-64 text-${color}`}
    >
      <div className="h-1/4 flex">
        <span className="text-5xl">{rank}</span>
      </div>
      <div className="h-3/4 pt-4 flex flex-col">
        <div className="h-1/3 self-center sm:self-start">
          <img className="h-full object-contain" src={icon} alt={suit} />
        </div>

        <div className="h-2/3 flex flex-row-reverse">
          <img className="h-full object-contain" src={icon} alt={suit} />
        </div>
      </div>
    </div>
  );
}

export default Card;
