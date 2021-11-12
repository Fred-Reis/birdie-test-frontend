import { Itemcontainer, DateContainer } from "./styles";

import { EventPropsDTO } from "../../../types/eventPropsDTO";

import calendar from "../../../assets/icons/calendar.svg";

export const TableRow = (props: {
  item: EventPropsDTO;
  id: string;
  setId: any;
}) => {
  const { timestamp, event_type, caregiver_id, id } = props.item;
  const { setId } = props;

  return (
    <Itemcontainer onClick={() => setId(id)} event_type={event_type}>
      <DateContainer>
        {new Date(timestamp.substring(0, 10)).toLocaleDateString("en-EN")}
        <img src={calendar} alt="calendar" />
      </DateContainer>
      <p>{event_type.replaceAll("_", " ").toUpperCase()}</p>
      <p>{caregiver_id}</p>
    </Itemcontainer>
  );
};
