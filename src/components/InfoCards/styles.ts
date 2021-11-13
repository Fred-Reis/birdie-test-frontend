import styled from "styled-components/";

interface InfoCardsProps {
  type: "events" | "calm_day" | "critical_day" | "alerts";
}

export const Container = styled.div<InfoCardsProps>`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 220px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: ${({ type }) => (type === "alerts" ? "#ec3030" : "#5AC5C1")};
    font-size: 2rem;
    line-height: 20px;
  }

  p {
    color: var(--primary-blue);
    font-size: 1.8rem;
    line-height: 23px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    color: var(--primary-blue);
    font-size: 1.8rem;
    line-height: 23px;
    display: flex;
  }

  img {
    width: 30px;
  }
`;

export const BodyMessage = styled.div`
  margin-top: auto;

  flex: 1;
  display: flex;

  div {
    flex: 1;

    h3 {
      margin-right: 5px;
    }
  }
`;
