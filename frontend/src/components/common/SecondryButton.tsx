import { FC, memo } from 'react';

interface SecondaryButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = memo(({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="px-6 py-2 text-2xl capitalize tracking-widest rounded-xl border-2 focus:outline-none text-yellow-450 border-yellow-450 select-none whitespace-nowrap"
    >
      {text}
    </button>
  );
});
SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
