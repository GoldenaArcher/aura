import React, {ReactElement} from 'react'
import { Card as MUICard } from '@mui/material';
import './_card.scss'

type CardPropType = {
  className?: string;
  children: ReactElement;
  backgroundColor?: string;
  [x:string]: any;
}

const Card = ({className="",children, backgroundColor, ...rest}:CardPropType) => {

  return (
    <MUICard className={"card " + className} style={{backgroundColor:backgroundColor}} {...rest}>
      {children}
    </MUICard>
  )
}


export default Card;