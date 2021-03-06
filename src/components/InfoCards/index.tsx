import { Container, TitleContainer, BodyMessage } from "./styles";

import recurrent from "../../assets/icons/recurrent.svg";
import best from "../../assets/icons/best.svg";
import critical from "../../assets/icons/critical.svg";
import alerts from "../../assets/icons/alerts_sent.svg";

interface InfoCardsProps {
  type: "events" | "calm_day" | "critical_day" | "alerts";
  event_type?: string;
  value: any;
}

const cardsValues = {
  events: {
    title: "Most recurrent event type",
    icon: recurrent,
  },
  calm_day: {
    title: "Most calm day",
    icon: best,
  },
  critical_day: {
    title: "Critical day",
    icon: critical,
  },
  alerts: {
    title: "Alerts triggered by Recipient",
    icon: alerts,
  },
};

export const InfoCards = ({ type, value, event_type }: InfoCardsProps) => {
  return (
    <Container type={type}>
      <TitleContainer>
        <p>{cardsValues[type].title}</p>
        <img src={cardsValues[type].icon} alt="icon" />
      </TitleContainer>

      <BodyMessage>
        {event_type ? (
          <div>
            <h3>{event_type.replaceAll("_", " ")}</h3>
            <p>{value} events </p>
          </div>
        ) : (
          <h3>{value ? value : "0"}</h3>
        )}
      </BodyMessage>
    </Container>
  );
};
