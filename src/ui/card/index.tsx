import React, { ReactElement } from 'react';
import { Card as MUICard } from '@mui/material';

export enum CardBackgroundColor {
  White = 'white',
}

export enum CardBoardRadius {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'x-large',
}

type CardPropType = {
  children: ReactElement;
  className?: string;
  backgroundColor?: CardBackgroundColor;
  borderRadius?: CardBoardRadius;
  elevation?: boolean;
  shadow?: boolean;
  transparent?: boolean;
};

const getCardBgClass = (backgroundColor: CardBackgroundColor) => {
  return `aura__card-bg-${backgroundColor}`;
};

const getRadiusClass = (borderRadius: CardBoardRadius) => {
  return `aura__card-radius-${borderRadius}`;
};

const Card = ({
  className = '',
  children,
  backgroundColor = CardBackgroundColor.White,
  borderRadius = CardBoardRadius.Medium,
  elevation = false,
  shadow = false,
  transparent = false,
}: CardPropType) => {
  const classNames = [
    'aura__card',
    getCardBgClass(backgroundColor),
    getRadiusClass(borderRadius),
  ];

  if (transparent) {
    classNames.push('aura__card-transparent');
  }

  // make sure customized classname is always appended at the end so that it can be overwritten
  classNames.push(className || '');
  return <MUICard className={classNames.join(' ')}>{children}</MUICard>;
};

export default Card;
