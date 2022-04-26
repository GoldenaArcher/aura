import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './_input.scss';

type InputPropType = {
  className?: string;
  placeholder?: any;
  errorMessage?: string;
};

const Input = ({ className, placeholder = 'Placeholder' }: InputPropType) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <TextField
      variant="outlined"
      label={placeholder}
      className={className}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
