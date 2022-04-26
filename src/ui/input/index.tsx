import React, { useState } from 'react';

type InputPropType = {
  className?: string;
  placeholder?: any;
  errorMessage?: string;
};

const Input = ({
  className,
  placeholder = 'placeholder'
}: InputPropType) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="input__container">
      <input
        placeholder={placeholder}
        className={'input__field ' + className}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;