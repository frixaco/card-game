import React, { memo } from 'react';
import PrimaryButton from './common/PrimaryButton';
import SecondaryButton from './common/SecondryButton';

interface GameControlsProps {
  handleDraw: () => void;
  handleReset: () => void;
}

const DrawOrReset: React.FC<GameControlsProps> = memo(({ handleDraw, handleReset }) => {
  return (
    <div className="w-full mt-4 flex flex-col items-center justify-end md:justify-around">
      <div className="self-center">
        <PrimaryButton text="Deal" onClick={handleDraw} />
      </div>

      <div className="mt-6 md:mt-0 md:self-end">
        <SecondaryButton text="Reset" onClick={handleReset} />
      </div>
    </div>
  );
});
DrawOrReset.displayName = 'DrawOrReset';

export default DrawOrReset;
