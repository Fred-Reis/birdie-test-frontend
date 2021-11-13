import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 10px 30px;
  /* background: var(--primary-blue); */
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  padding: 10px 50px 10px 10px;
  flex: 1;
  width: 100%;
  color: var(--primary-blue);

  h1 {
    position: absolute;
    text-align: center;
    right: 0;
    left: 0;
    margin: auto;
    z-index: -1;
  }
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.section`
  height: 100%;
  width: 80%;
  margin: auto auto 0 0;

  display: flex;
  flex-direction: column;
`;

export const TopHalfDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
