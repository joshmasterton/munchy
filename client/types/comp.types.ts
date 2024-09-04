import { Dispatch, ReactNode, SetStateAction } from 'react';

export type InputProps<T> = {
  id: string;
  placeholder: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  canClear?: boolean;
};

export type ButtonProps = {
  type: 'button' | 'submit';
  children?: ReactNode;
  onClick?: () => void;
<<<<<<< HEAD
  className?: string;
};

export type ContainerCardProps = {
  title: string;
  picture: string;
  description: string;
=======
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
};

export type FoodCardProps = {
  title: string;
  category: string;
  picture: string;
  likes: number;
  calories: number;
  difficult: string;
  time: number;
<<<<<<< HEAD
  topRated?: boolean;
=======
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
};
