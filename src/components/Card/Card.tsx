import React, { ReactElement } from 'react'
import "./Card.scss";

type CardPropType = {
  className?: string;
  children: ReactElement;
  backgroundColor?: string;
  [x:string]: any;
}

export default function Card({className="",children, backgroundColor, ...rest}:CardPropType) {

  return (
    <div className={"card " + className} style={{backgroundColor:backgroundColor}}>
      {children}
    </div>
  )
}
