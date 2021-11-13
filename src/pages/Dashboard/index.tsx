import { useEffect, useState } from "react";

import {
  Container,
  Header,
  Content,
  InfoCardsContainer,
  TopHalfDataContainer,
} from "./styles";
import { InfoCards } from "../../components/InfoCards";
import { DoughnutChart } from "../../components/Doughnut";
import { Table } from "../../components/Table";
import { LineChart } from "../../components/Line";
import { ProfileCard } from "../../components/ProfileCard";

import { Modal } from "../../components/Modal";

import { EventPropsDTO } from "../../types/eventPropsDTO";
import {
  filterByArgument,
  filterByEvent_types,
} from "../../utils/filterFunctions";
import { Button } from "../../components/Button";
import { useStore } from "../../storage/events.storage";
import { DoughnutSkeleton } from "../../components/skeleton/DoughnutSkeleton";
import { TableSkeleton } from "../../components/skeleton/TableSkeleton";
import { LineSkeleton } from "../../components/skeleton/LineSkeleton";
import { ProfileCardSkeleton } from "../../components/skeleton/ProfileCardSkeleton";
import { InfoCardSkeleton } from "../../components/skeleton/InfoCardSkeleton";
import { DashboardHeaderSkeleton } from "../../components/skeleton/DashboardHeaderSkeleton";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [events, setStateEvents] = useState<EventPropsDTO[]>([]);
  const [requestCounter, setRequestCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    user: {
      name: {
        first: "John",
        last: "Doo",
      },
      email: "johndoo@email.com",
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
      },
    },
  });

  const setEvents = useStore((state) => state.setEvents);

  const handleUpdate = (type: any) => {
    setLoading(true);
    type === "-"
      ? setRequestCounter((counter) => counter - 1)
      : setRequestCounter((counter) => counter + 1);
  };

  useEffect(() => {
    setEvents(requestCounter).then((orders) => {
      setStateEvents(orders.data);
      setLoading(false);
    });
  }, [requestCounter, setEvents]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?nat=gb")
      .then((user) => user.json())
      .then((user) => setUser(user.results[0]));
  }, []);

  const recipient_id = [...events][0]?.care_recipient_id;

  // all event types array
  var filteredEvents = filterByArgument([...events], "event_type").reduce(
    function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    },
    []
  );

  var eventsObject = filterByEvent_types([...events], filteredEvents);

  const mostRecurrentEvent: any = Object.entries(eventsObject).sort(
    (a: any, b: any) => a[1].length - b[1].length
  )[Object.entries(eventsObject).length - 1];

  // function to open/close events modal at table
  const toggleModal = (event_id?: any) => {
    setShowModal((prev) => !prev);
    if (event_id) setId(event_id);
  };

  // all dates sorted array
  const datesSorted = filterByArgument([...events], "timestamp")
    .map((el) =>
      String(new Date(el.substring(0, 10)).toLocaleDateString("en-EN"))
    )
    .reduce(function (a: any, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, [])
    .sort((a: any, b: any) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <>
      <Modal
        events={events}
        event_id={id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {loading ? (
        <Container>
          <Header>
            <DashboardHeaderSkeleton styles={{ width: "100%" }} />
          </Header>

          <div style={{ display: "flex", width: "100%" }}>
            <Content>
              <div>
                <TopHalfDataContainer>
                  <DoughnutSkeleton />

                  <TableSkeleton styles={{ width: "100%" }} />
                </TopHalfDataContainer>
              </div>
              <LineSkeleton style={{ width: "100%" }} />
            </Content>
            <InfoCardsContainer>
              <ProfileCardSkeleton style={{ width: "100%" }} />

              <InfoCardSkeleton style={{ width: "100%", margin: "auto" }} />
              <InfoCardSkeleton style={{ width: "100%", margin: "auto" }} />
            </InfoCardsContainer>
          </div>
        </Container>
      ) : (
        <Container>
          <Header>
            <div>
              <Button
                disabled={requestCounter === 0}
                title="<< 100 events"
                onclick={() => {
                  handleUpdate("-");
                }}
              ></Button>
              <Button
                title=">> 100 events"
                onclick={() => {
                  handleUpdate("+");
                }}
              ></Button>
            </div>
            <h1>Care Recipient Dashboard</h1>

            <h2>
              Period: {datesSorted[0]} - {datesSorted[datesSorted?.length - 1]}
            </h2>
          </Header>

          <div style={{ display: "flex", width: "100%" }}>
            <Content>
              <div>
                <TopHalfDataContainer>
                  <DoughnutChart events={events} />

                  {/* <Polar /> */}
                  <Table events={events} setId={toggleModal} />
                </TopHalfDataContainer>
              </div>
              <LineChart events={events} />
            </Content>
            <InfoCardsContainer>
              <ProfileCard care_recipient_id={recipient_id} user={user} />
              <InfoCards
                type="events"
                event_type={mostRecurrentEvent[0]}
                value={mostRecurrentEvent[1]?.length}
              />

              <InfoCards
                type="alerts"
                value={eventsObject["alert_raised"]?.length}
              />
            </InfoCardsContainer>
          </div>
        </Container>
      )}
    </>
  );
};
