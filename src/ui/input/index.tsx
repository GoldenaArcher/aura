import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './_input.scss';

type InputPropType = {
  className?: string;
  placeholder?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  value?: any;
};

const Input = ({ className, placeholder = 'Placeholder', onChange, type, value }: InputPropType) => {
 

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      className={`input__field +${className}`}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;