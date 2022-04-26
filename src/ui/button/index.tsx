
import React, { FC, useState } from 'react';
import SvgGmail from '../../assets/iconComponents/Gmail'

import { Button, ButtonProps } from '@mui/material';

interface IProps extends ButtonProps {
    buttonType?: string,
    buttonInput?: string,
    onclick?: Function
}

const ButtonUi: FC<IProps> = ({
  variant,
  color,
  children,
  size,
  disabled,
  onclick,
  buttonInput,
  buttonType = '',
  ...rest
}) => {

    const [btnState, setBtnState] = useState<IProps>({
        buttonType: 'login',
        buttonInput: 'SUBMIT'
    })

    const renderBtn = () => {
        if (btnState.buttonType === 'login') {
            return <Button onClick={() => onclick} variant='contained' color='primary' size={size} disabled={disabled} sx={{ bgcolor: 'linear-gradient(to right, $blue-700, $blue-200)', '&:hover': { bgcolor: 'linear-gradient(to right, $blue-700, $blue-200)'} }}>Login</Button>
        } 
        else if (btnState.buttonType === 'gmail') {
            return <Button onClick={() => onclick} variant='outlined' color='error' size={size} disabled={disabled}><SvgGmail/><span className='gmail__span'>Gmail</span></Button>
        }
        else if (btnState.buttonType === 'other') {
            return <Button onClick={() => onclick} variant='contained' color='primary' size={size} disabled={disabled}>{btnState.buttonInput}</Button>
        }
        else {
            return null
        }
    }
    
  return (
    renderBtn()
  );
};

export default ButtonUi;