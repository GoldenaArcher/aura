import React, { FC, useState } from 'react';
import SvgGmail from '../../assets/iconComponents/Gmail';
import { Button, ButtonProps } from '@mui/material';
// Props = buttonType, buttonInput, onClick

interface IProps extends ButtonProps {
  buttonType?: string;
  buttonInput?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonUi: FC<IProps> = ({
  variant,
  color,
  children,
  size,
  disabled,
  onClick,
  buttonInput,
  buttonType = '',
  ...rest
}) => {
  const [btnState, setBtnState] = useState<IProps>({
    buttonType,
    buttonInput: buttonInput ? buttonInput : 'Other',
  });

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    return onClick ? onClick(e) : null;
  };

  const renderBtn = () => {
    if (btnState.buttonType === 'login') {
      return (
        <Button
          onClick={handleOnClick}
          variant="contained"
          size={size}
          sx={{
            bgcolor: 'linear-gradient(to right, $blue-700, $blue-200)',
            '&:hover': {
              bgcolor: 'linear-gradient(to right, $blue-700, $blue-200)',
            },
          }}
        >
          Login
        </Button>
      );
    } else if (btnState.buttonType === 'gmail') {
      return (
        <Button
          onClick={handleOnClick}
          variant="outlined"
          color="error"
          size={size}
        >
          <SvgGmail />
          <span className="gmail__span">Gmail</span>
        </Button>
      );
    } else {
      return (
        <Button
          onClick={handleOnClick}
          variant="contained"
          color="primary"
          size={size}
        >
          {btnState.buttonInput}
        </Button>
      );
    }
  };

  return renderBtn();
};

export default ButtonUi;

// const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//     alert("hi")

//     if (onchange) {

//     }
//   };
