import React, { memo } from 'react';
import Button from './common/Button';

interface DealOrResetProps {
  handleDraw: () => void;
  handleReset: () => void;
}

// Memoizing the component to make sure it rerenders only when handleDraw and handleReset are recreated
const DealOrReset: React.FC<DealOrResetProps> = memo(({ handleDraw, handleReset }) => {
  return (
    <div className="w-full mt-4 flex flex-col items-center justify-end md:justify-around">
      <div className="self-center">
        <Button type="primary" text="Deal" onClick={handleDraw} aria-label="Deal" />
      </div>

      <div className="mt-6 md:mt-0 md:self-end">
        <Button type="secondary" text="Reset" onClick={handleReset} aria-label="Reset" />
      </div>
    </div>
  );
});
DealOrReset.displayName = 'DealOrReset';

export default DealOrReset;
