import * as React from 'react';
import {StyledEventListItemHeading} from './styles';

type EventListItemHeadingProps = {children: string | JSX.Element | JSX.Element[]};

const EventListItemHeading = ({children}: EventListItemHeadingProps): JSX.Element => <StyledEventListItemHeading>{children}</StyledEventListItemHeading>

export default EventListItemHeading;
