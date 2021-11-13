import {
  Container,
  Header,
  Content,
  InfoCardsContainer,
  TopHalfDataContainer,
} from "./styles";

import { DoughnutSkeleton } from "./components/Doughnut.skeleton";
import { TableSkeleton } from "./components/Table.skeleton";
import { LineSkeleton } from "./components/Line.skeleton";
import { ProfileCardSkeleton } from "./components/ProfileCard.skeleton";
import { InfoCardSkeleton } from "./components/InfoCard.skeleton";
import { DashboardHeaderSkeleton } from "./components/DashboardHeader.skeleton";

export const Skeleton = () => {
  return (
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
  );
};
