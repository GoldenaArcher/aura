import React, { ChangeEventHandler } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import ErrorMsg from '../errorMsg';

type InputPropType = {
  className?: string;
  value?: string;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  errorMsg?: string;
};

const Input = ({
  className,
  onChangeHandler,
  value,
  errorMsg,
  ...rest
}: InputPropType) => {
  const classNames = ['aura__input', className];

  const inputFields: TextFieldProps = {
    variant: 'outlined',
    className: classNames.join(' '),
    onChange: undefined,
  };

  if (onChangeHandler) {
    inputFields.onChange = onChangeHandler;
  }

  if (value !== undefined) {
    inputFields.value = value;
  }

  return (
    <>
      <TextField {...inputFields} {...rest} />
      {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
    </>
  );
};

export default Input;
