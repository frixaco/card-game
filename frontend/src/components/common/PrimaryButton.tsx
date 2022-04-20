import { FC, memo } from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = memo(({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="px-10 md:px-14 py-3 md:py-5 text-5xl md:text-6xl uppercase tracking-widest rounded-xl focus:outline-none text-black bg-yellow-450"
    >
      {text}
    </button>
  );
});
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
