import {StyledEventListItemValue} from './styles';

type EventListItemValue = {children: string | JSX.Element | JSX.Element[];};

const EventListItem = ({children}: EventListItemValue): JSX.Element => <StyledEventListItemValue>{children}</StyledEventListItemValue>

export default EventListItem;
