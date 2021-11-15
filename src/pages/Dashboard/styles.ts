import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0 10px 30px;

  @media (max-width: 1280px) {
    max-height: 100%;
    padding: 10px 30px 10px 30px;
  }
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

  span {
    position: absolute;
    text-align: center;
    right: 0;
    left: 0;
    margin: auto;
    z-index: -1;
    align-items: center;
    display: flex;
    justify-content: center;

    img {
      height: 50px;
      margin-right: 30px;
    }

    @media (max-width: 900px) {
      h1 {
        display: none;
      }
    }
  }
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (max-width: 1000px) {
    justify-content: center;

    div {
      margin-left: 10px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }
`;

export const DataContent = styled.section`
  height: 100%;
  width: 80%;
  margin: auto auto 0 0;

  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const TopHalfDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
