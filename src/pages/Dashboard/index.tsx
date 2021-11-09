import {
  Container,
  Header,
  UserContainer,
  Content,
  InfoCardsContainer,
  DataContainer,
  TopHalfDataContainer,
} from "./styles";
import { InfoCards } from "../../components/InfoCards";
import { DoughnutChart } from "../../components/Doughnut";
import { Polar } from "../../components/Polar";
import { Table } from "../../components/Table";
import { LineChart } from "../../components/Line";

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <h1>Recipient Care Dashboard</h1>

        <UserContainer>
          <div>
            <p>John Doo</p>
            <p>johndoo@email.com</p>
          </div>

          <img
            src="https://gravatar.com/avatar/53a0d88e74ac2796506043ccfc9040de?s=400&d=robohash&r=x"
            alt=""
          />
        </UserContainer>
      </Header>

      {/* <InfoCardsContainer>
        <InfoCards
          type="events"
          event_type="regular_medication_not_taken"
          value="20"
        />
        <InfoCards type="calm_day" value="2021-04-21" />
        <InfoCards type="critical_day" value="2021-04-21" />
        <InfoCards type="alerts" value="15" />
      </InfoCardsContainer> */}
      <Content>
        <DataContainer>
          <TopHalfDataContainer>
            <DoughnutChart />

            <Polar />
          </TopHalfDataContainer>

          <LineChart />
        </DataContainer>

        <Table />
      </Content>
    </Container>
  );
};
