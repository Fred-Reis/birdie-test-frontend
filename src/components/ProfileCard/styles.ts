import styled from "styled-components/";

export const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 220px !important;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  align-items: center;

  h2 {
    margin-bottom: 10px;
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  }

  h3 {
    color: var(--primary-green);
    font-size: 1.2rem;
    line-height: 20px;
    margin-top: 8px;
  }

  p {
    color: var(--primary-blue);
    font-size: 1.4rem;
    line-height: 23px;
    line-break: anywhere;
  }
`;
