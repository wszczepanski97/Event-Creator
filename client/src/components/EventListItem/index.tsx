import * as React from 'react';
import {StyledListItem} from './styles';

type EventListItemProps = {children: string | JSX.Element | JSX.Element[];}
export type Item = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    eventDate: string
}

const EventListItem = ({ children }: EventListItemProps): JSX.Element => <StyledListItem>{children}</StyledListItem>

export default EventListItem;
