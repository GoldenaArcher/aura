import React, {ReactElement} from 'react'
import { Card as MUICard, Paper } from '@mui/material';
import './_card.scss'


type CardPropType = {
  className?: string;
  children: ReactElement;
  backgroundColor?: string;
  elevation?: number;
  shadow?: boolean;
}

const Card = ({className="",children, backgroundColor="white",elevation=0,shadow=false}:CardPropType) => {

  return (
    <Paper
      elevation={elevation}
    >
      <MUICard 
        className={`card ${shadow && "card--shadow "}` + className} 
        style={{backgroundColor:backgroundColor}}
        variant="outlined"
      >
          {children}
      </MUICard>
    </Paper>
  )
}


export default Card;