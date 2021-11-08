import styled from "styled-components/";
// import { lighten } from "polished";

interface InfoCardsProps {
  type: "events" | "calm_day" | "critical_day" | "alerts";
}

export const Container = styled.div<InfoCardsProps>`
  flex: 1;
  padding: 20px;
  height: 120px;
  border-radius: 10px;
  max-width: 22%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: var(--primary-green);
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
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */

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
