import { darken, lighten } from "polished";
import styled from "styled-components";

interface EventProps {
  event_type: string;
}

export const Itemcontainer = styled.li<EventProps>`
  display: flex;
  justify-content: space-between;
  background: ${({ event_type }) =>
    event_type === "alert_raised" ? lighten(0.2, "#ec3030") : "#EAFFFE"};
  margin-bottom: 2px;
  align-items: center;
  border-radius: 5px;
  color: ${({ event_type }) =>
    event_type === "alert_raised" ? "#fff" : "#777"};
  border: 2px solid var(--primary-green);
  font-size: 20px;
  padding-right: 15px;
  /* transition: background 0.3; */

  :hover {
    background: ${({ event_type }) =>
      event_type === "alert_raised"
        ? lighten(0.1, "#ec3030")
        : darken(0.1, "#EAFFFE")};
  }
`;

export const DateContainer = styled.div`
  display: flex;
  color: #777;
  width: 20%;
  border-right: 2px solid var(--primary-green);
  padding: 10px 15px;
  background: var(--light-yellow);
  align-items: center;
  justify-content: space-between;

  img {
    height: 15px;
    margin-bottom: 4px;
  }
`;
