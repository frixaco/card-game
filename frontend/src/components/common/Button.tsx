import React, { memo } from 'react';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = memo(({ text, onClick, type = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        (type === 'primary' && 'btn-primary') || (type === 'secondary' && 'btn-secondary')
      }`}
    >
      {text}
    </button>
  );
});
Button.displayName = 'Button';

export default Button;
