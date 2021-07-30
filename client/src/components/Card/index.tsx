import * as React from 'react';
import {StyledCard} from './styles';
import CardTitle from '../CardTitle';

type CardProps = {
  children: string | JSX.Element | JSX.Element[],
  title: string
};

const Card = ({ children, title }: CardProps): JSX.Element => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      {children}
    </StyledCard>
  )
};

export default Card;
