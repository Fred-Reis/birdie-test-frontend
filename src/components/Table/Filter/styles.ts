import { darken, lighten } from "polished";
import styled from "styled-components";

interface CheckBoxProps {
  checked: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.div`
  background: var(--light-yellow);
  border: 2px solid var(--primary-green);
  border-radius: 4px;
  padding: 0 10px;
  margin-right: 10px;
  color: var(--primary-green);
  font-size: 18px;
  transition: background 0.3 ease-in-out;

  :hover {
    background: ${darken(0.2, "#FDF8D1")};
  }
`;

export const CheckboxContainer = styled.div<CheckBoxProps>`
  margin: 0px 3px;

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const StyledCheckbox = styled.label<CheckBoxProps>`
  width: 20px;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  background: #fdf8d1;
  border: 2px solid
    ${({ checked }) => (checked ? "#5AC5C1" : lighten(0.2, "#5AC5C1"))};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: ${({ checked }) => (checked ? "flex" : "none")};
  }
`;

export const FilterModalList = styled.ul`
  position: absolute;
  background: var(--light-yellow);
  border: 2px solid var(--primary-green);
  border-radius: 4px;
  padding: 10px 40px 0 10px;
  margin-right: 10px;
  height: 200px;
  min-width: 160px;
  text-align: center;
  right: 0;
  top: 10px;
  overflow: scroll;
  list-style: none;
  font-size: 18px;

  color: var(--primary-green);

  li {
    :hover {
      background: var(--light-green);
    }
  }
`;

export const CloseButton = styled.span`
  position: fixed;
  right: 22%;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: var(--light-green);
  border: 2px solid var(--primary-green);
  color: var(--primary-green);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;
