import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px 20px;
  /* background: var(--primary-blue); */
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  color: var(--primary-blue);
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin-left: auto;

  p {
    font-size: 1.3rem;
    line-height: 16px;
    text-align: end;
  }

  img {
    margin-left: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 #000;
  }
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Content = styled.section`
  height: 100%;
  width: 100%;
  margin-top: auto;

  display: flex;
  flex-direction: row;
`;

export const DataContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
`;

export const TopHalfDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
