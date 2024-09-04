import { MouseEvent } from 'react';
import { ButtonProps } from '../../types/comp.types';

<<<<<<< HEAD
export const Button = ({ type, children, onClick, className }: ButtonProps) => {
=======
export const Button = ({ type, children, onClick }: ButtonProps) => {
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    if (onClick) {
      onClick();
    }
  };

  return (
<<<<<<< HEAD
    <button type={type} onClick={handleOnClick} className={className}>
=======
    <button type={type} onClick={handleOnClick}>
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
      {children}
    </button>
  );
};
