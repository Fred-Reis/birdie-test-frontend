import { useState, useRef } from "react";

import { Container, ListContainer } from "./styles";

import { EventPropsDTO } from "../../types/eventPropsDTO";

import { TableRow } from "./TableRow";
import { Filter } from "./Filter";

// function to sort events by timestamp
const sortEvents = (arr: EventPropsDTO[], by: string) => {
  if (by === "recents") {
    arr.sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  } else {
    arr.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }
  return arr;
};

export const Table = (props: { events: EventPropsDTO[]; setId: any }) => {
  const { events, setId } = props;
  const [sortBy, setSortBy] = useState<"recents" | "olders">("recents");
  const [eventList, setEventList] = useState<EventPropsDTO[]>(events);

  // events list reference
  const eventListRef = useRef(events);

  // function to sort events by date
  const handleSortEvents = () => {
    setSortBy(sortBy === "recents" ? "olders" : "recents");
    setEventList(sortEvents(eventList, sortBy));
  };

  return (
    <Container>
      <div>
        <div>
          <button onClick={handleSortEvents}>{sortBy}</button>
          <button onClick={() => setEventList(eventListRef.current)}>
            clear filters
          </button>
        </div>
        <h1>Events</h1>
        <div>
          <Filter events={eventList} setEventList={setEventList} />
        </div>
      </div>

      <div>
        <p>Date</p>
        <p>Event Type</p>
        <p>Caregiver Id</p>
      </div>

      <ListContainer>
        {eventList.map((item: any) => (
          <TableRow id={item.id} item={item} setId={setId} />
        ))}
      </ListContainer>
    </Container>
  );
};
