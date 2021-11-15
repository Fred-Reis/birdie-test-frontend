import styled from "styled-components";

export const Container = styled.ul`
  scroll-behavior: smooth;
  position: relative;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  flex: 1;
  margin: 10px 0 10px 10px;
  padding-top: 10px;
  color: #777;

  h1 {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;

    @media (max-width: 1300px) {
      display: none;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    p {
      font-size: 1.2rem;
    }
  }

  h1 {
    text-align: center;
    font-family: sans-serif;
    font-size: 1.4rem;
    color: #777;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  overflow: scroll;
  height: 380px;
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
`;
