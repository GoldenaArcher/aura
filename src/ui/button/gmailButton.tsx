import React from 'react';
import Button, { ButtonBariant } from '.';

import gmailSvg from '../../assets/svg/gmail-icon-logo.svg';

type LoginButtonType = {
  onClick?: any;
};

const GmailButton = ({ onClick }: LoginButtonType) => {
  return (
    <Button
      classname="gmail__btn flex"
      onClick={onClick}
      variant={ButtonBariant.Outlined}
    >
      <>
        <img className="btn__icon" src={gmailSvg} alt="gmail icon" />
        <span>Gmail</span>
      </>
    </Button>
  );
};

export default GmailButton;
