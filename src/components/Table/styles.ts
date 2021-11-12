import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
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
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    button {
      background: var(--light-yellow);
      border: 2px solid var(--primary-green);
      border-radius: 4px;
      width: 80px;
      margin-right: 10px;

      color: var(--primary-green);
      font-size: 18px;
      transition: background 0.3 ease-in-out;

      :hover {
        background: ${darken(0.2, "#FDF8D1")};
      }
    }

    p {
      font-size: 18px;
    }
  }

  h1 {
    text-align: center;
    font-family: sans-serif;
    font-size: 23px;
    color: #777;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  overflow: scroll;
  height: 380px;
  /* background: #444; */
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
`;
