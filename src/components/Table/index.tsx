import { Container, ListContainer } from "./styles";

import { EventPropsDTO } from "../../types/eventPropsDTO";

import { TableRow } from "./TableRow";
import { Filter } from "./Filter";
import { useState } from "react";

export const Table = (props: {
  events: EventPropsDTO[];
  setEvents: () => void;
}) => {
  const { events } = props;
  const [sortBy, setSortBy] = useState<"recents" | "olders">("recents");
  const [eventList, setEventList] = useState<EventPropsDTO[]>(events);

  const handleSortEvents = () => {
    setSortBy(sortBy === "recents" ? "olders" : "recents");
  };

  return (
    <Container>
      <div>
        <button onClick={handleSortEvents}>{sortBy}</button>
        <h1>Events</h1>
        <div>
          <Filter />
        </div>
      </div>

      <div>
        <p>Date</p>
        <p>Event Type</p>
        <p>Caregiver Id</p>
      </div>

      <ListContainer>
        {eventList.map((item: any) => (
          <TableRow id={item.id} item={item} />
        ))}
      </ListContainer>
    </Container>
  );
};
