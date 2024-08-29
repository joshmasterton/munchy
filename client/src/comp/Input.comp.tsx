import { CgClose } from 'react-icons/cg';
import { InputProps } from '../../types/comp.types';
import '../style/comp/Input.comp.scss';
import '../style/comp/Button.comp.scss';
import { MouseEvent } from 'react';

export const Input = ({
  id,
  placeholder,
  value,
  setValue,
  canClear = false
}: InputProps<string>) => {
  return (
    <div className="input">
      <label htmlFor={id}>
        <input
          id={id}
          value={value}
          className={canClear ? 'clear' : ''}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </label>
      {canClear && (
        <button
          type="button"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.blur();
            setValue('');
          }}
        >
          <CgClose />
        </button>
      )}
    </div>
  );
};
