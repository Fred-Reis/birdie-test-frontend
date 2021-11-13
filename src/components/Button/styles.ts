import { darken } from "polished";
import styled from "styled-components";

export const Container = styled<"button">("button")`
  background: var(--light-yellow);
  border: 2px solid var(--primary-green);
  border-radius: 4px;
  min-width: 80px;
  padding: 0 10px;
  margin-right: 10px;

  color: var(--primary-green);
  font-size: 1.2rem;
  transition: background 0.3 ease-in-out;

  :hover {
    background: ${darken(0.2, "#FDF8D1")};
  }
`;
