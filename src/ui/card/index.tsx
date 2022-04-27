import React, { ReactElement } from 'react';
import { Card as MUICard, Paper } from '@mui/material';
import './_card.scss';

type CardPropType = {
  className?: string;
  children: ReactElement;
  backgroundColor?: string;
  elevation?: number;
  shadow?: boolean;
  transparent?: boolean;
  padding?: string;
};

const Card = ({
  className = '',
  children,
  backgroundColor = 'white',
  elevation = 0,
  shadow = false,
  transparent = false,
  padding = "1rem"
}: CardPropType) => {
  return (
    <Paper style={{backgroundColor: "transparent",border:"none"}}>
      <MUICard
        className={
          `card ${shadow ? 'card--shadow' : ''}${
            transparent ? 'card--transparent ' : ''
          }` + className
        }
        style={{ backgroundColor: backgroundColor, padding: padding }}
        variant="outlined"
      >
        {children}
      </MUICard>
    </Paper>
  );
};

export default Card;
