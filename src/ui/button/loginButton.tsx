import React from 'react';
import Button from '.';

type LoginButtonType = {
  onClick?: any;
};

const LoginButton = ({ onClick }: LoginButtonType) => {
  return (
    <Button classname="login__btn" onClick={onClick}>
      Login
    </Button>
  );
};

export default LoginButton;
