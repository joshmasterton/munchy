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
};

export type FoodCardProps = {
  title: string;
  category: string;
  picture: string;
  likes: number;
  calories: number;
  difficult: string;
  time: number;
};
