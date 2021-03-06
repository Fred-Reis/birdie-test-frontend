import { useEffect, useState } from "react";

import {
  Container,
  Header,
  ContentContainer,
  DataContent,
  InfoCardsContainer,
  TopHalfDataContainer,
} from "./styles";

import { DoughnutChart } from "../../components/dataComponents/Doughnut";
import { LineChart } from "../../components/dataComponents/Line";
import { Table } from "../../components/dataComponents/Table";
import { ProfileCard } from "../../components/ProfileCard";
import { InfoCards } from "../../components/InfoCards";
import { Skeleton } from "../../components/Skeleton";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

import { useStore } from "../../storage/events.storage";

import {
  filterByArgument,
  filterByEvent_types,
} from "../../utils/filterFunctions";

import { EventPropsDTO } from "../../types/eventPropsDTO";

import logo from "../../assets/logo.png";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [events, setStateEvents] = useState<EventPropsDTO[]>([]);
  const [requestCounter, setRequestCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

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

  // effect to generate a random user every time app is loaded
  useEffect(() => {
    fetch("https://randomuser.me/api/")
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
        <Skeleton />
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
            <span>
              <img src={logo} alt="logo" />
              <h1>Care Recipient Dashboard</h1>
            </span>

            <h2>
              Period: {datesSorted[0]} - {datesSorted[datesSorted?.length - 1]}
            </h2>
          </Header>

          <ContentContainer>
            <DataContent>
              <div>
                <TopHalfDataContainer>
                  <DoughnutChart events={events} />

                  {/* <Polar /> */}
                  <Table events={events} setId={toggleModal} />
                </TopHalfDataContainer>
              </div>
              <LineChart events={events} />
            </DataContent>
            <InfoCardsContainer>
              <ProfileCard care_recipient_id={recipient_id} user={user} />

              <div>
                <InfoCards
                  type="events"
                  event_type={mostRecurrentEvent[0]}
                  value={mostRecurrentEvent[1]?.length}
                />

                <InfoCards
                  type="alerts"
                  value={eventsObject["alert_raised"]?.length}
                />
              </div>
            </InfoCardsContainer>
          </ContentContainer>
        </Container>
      )}
    </>
  );
};
