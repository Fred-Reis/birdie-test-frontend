import { lighten } from "polished";
import styled from "styled-components";

interface CheckBoxProps {
  checked: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 10px 40px 10px 10px;
  margin-right: 10px;
  max-height: 200px;
  min-width: 160px;
  text-align: center;
  right: 0;
  top: 10px;
  overflow: scroll;
  list-style: none;
  font-size: 1.2rem;

  color: var(--primary-green);

  li {
    :hover {
      background: var(--light-green);
    }
  }
`;

export const CloseButton = styled.span`
  position: fixed;
  right: 21%;
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
  font-size: 1.4rem;
  font-weight: bold;
`;
