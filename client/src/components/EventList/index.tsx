import EventListItem, {Item} from '../EventListItem';
import {StyledEventList} from './styles';
import EventListItemHeading from '../EventListItemHeading';
import EventListItemValue from '../EventListItemValue';

type EventListProps = {data: Array<Item>};

const dateToCorrectString = ((date: string) => new Date(date).toLocaleString());
const EventList = ({ data }: EventListProps): JSX.Element => (
    <StyledEventList>
      {data.map(({id, eventDate, firstName, lastName, email}) => {
        return (
          <EventListItem key={id}>
            <EventListItemHeading>Date of Event:</EventListItemHeading>
              <EventListItemValue>{dateToCorrectString(eventDate)}</EventListItemValue>
            <EventListItemHeading>Reported by:</EventListItemHeading> 
              <EventListItemValue>{`${firstName} ${lastName}`}</EventListItemValue>
            <EventListItemHeading>Contact:</EventListItemHeading> 
              <EventListItemValue>{email}</EventListItemValue>
          </EventListItem>
        );
      })
      }
    </StyledEventList>
  );

export default EventList;
