import React, { ChangeEventHandler } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import './_input.scss';

type InputPropType = {
  className?: string;
  errorMessage?: string;
  value?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement>;
};

const Input = ({
  className,
  errorMessage,
  onChangeHandler,
  value,
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

  if (value) {
    inputFields.value = value;
  }

  return <TextField {...inputFields} {...rest} />;
};

export default Input;
