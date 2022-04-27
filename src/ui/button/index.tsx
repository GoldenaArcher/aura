import React, { ReactElement } from 'react';
import { Button as MuiButton } from '@mui/material';

export enum ButtonBariant {
  Contained = 'contained',
  Outlined = 'outlined',
}

type ButtonType = {
  children: ReactElement | string;
  variant?: ButtonBariant;
  classname?: string;
  onClick?: any;
};

const Button = ({
  children,
  variant = ButtonBariant.Contained,
  classname,
  onClick,
}: ButtonType) => {
  const classNames = ['arua__btn'];

  classNames.push(classname || '');

  return (
    <MuiButton
      onClick={onClick}
      className={classNames.join(' ')}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
