import { motion } from 'framer-motion';
import React from 'react';
import useMediaQuery from 'helpers/useMediaQuery';
import { deck, suitIconMapping } from '../helpers/drawRandomCards';

interface CardProps {
  cardId: string;
  order: number;
}

const translateYVals: { [k: number]: string } = {
  0: '-4rem',
  1: '-1rem',
  2: '0rem',
  3: '-1rem',
  4: '-4rem',
};

function template({ rotate, y }: { rotate: string | number; y: string | number }) {
  return `rotate(${rotate}) translateY(${y})`;
}

const Card: React.FC<CardProps> = ({ cardId, order }) => {
  const { suit, rank, color } = deck[cardId];
  const icon = suitIconMapping[suit];

  const shouldRotateTranslate = useMediaQuery('(min-width: 1080px)');

  return (
    <motion.div
      transformTemplate={template}
      animate={{ y: shouldRotateTranslate ? translateYVals[order] : '0rem' }}
      transition={{ type: 'spring', delay: order / 10, duration: 0.5 }}
      style={{ rotate: shouldRotateTranslate ? 15 - 7.5 * order : 0, y: '-100rem' }}
      className={`m-2 sm:m-6 p-5 sm:p-8 w-24 sm:w-36 xl:w-48 h-36 sm:h-56 xl:h-72 rounded-3xl flex flex-col justify-between text-${color} bg-white`}
    >
      <div className="h-1/4 flex">
        <span className="text-3xl sm:text-5xl">{rank}</span>
      </div>
      <div className="h-3/4 pt-4 flex flex-col">
        <div className="h-1/3 pb-1 self-start">
          <img className="h-full object-contain" src={icon} alt={suit} />
        </div>

        <div className="h-2/3 flex flex-row-reverse">
          <img className="h-full object-contain" src={icon} alt={suit} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
