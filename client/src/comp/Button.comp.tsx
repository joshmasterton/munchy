import { MouseEvent } from 'react';
import { ButtonProps } from '../../types/comp.types';

export const Button = ({ type, children, onClick }: ButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type={type} onClick={handleOnClick}>
      {children}
    </button>
  );
};
