import * as React from 'react';
import {StyledEventListItemValue} from './styles';

type EventListItemValue = {children: string | JSX.Element | JSX.Element[];};

const EventListItemValue = ({children}: EventListItemValue): JSX.Element => <StyledEventListItemValue>{children}</StyledEventListItemValue>

export default EventListItemValue;
