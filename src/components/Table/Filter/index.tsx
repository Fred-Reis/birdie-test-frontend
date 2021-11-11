import { useState } from "react";
import {
  Container,
  Select,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  FilterModalList,
} from "./styles";

import checkIcon from "../../../assets/icons/check-bold.svg";

export interface CheckBoxProps {
  checked: string;
  value: string;
  onclick: (any: string) => void;
}

const Checkbox = ({ checked, value, onclick }: CheckBoxProps) => (
  <CheckboxContainer
    checked={!!(checked === value)}
    onClick={() => onclick(value)}
  >
    <HiddenCheckbox
      value={value}
      onChange={() => onclick(value)}
      checked={checked === value}
    />
    <StyledCheckbox checked={!!(checked === value)}>
      <img src={checkIcon} style={{ width: "15px" }} alt="check icon" />
    </StyledCheckbox>

    <label> {value}</label>
  </CheckboxContainer>
);

const dateArr = [
  "4/22/2019",
  "4/23/2019",
  "4/24/2019",
  "4/25/2019",
  "4/26/2019",
  "4/27/2019",
  "4/28/2019",
  "4/29/2019",
  "4/30/2019",
  "5/1/2019",
  "5/2/2019",
  "5/3/2019",
  "5/4/2019",
  "5/5/2019",
  "5/6/2019",
  "5/7/2019",
  "5/8/2019",
  "5/9/2019",
  "5/10/2019",
  "5/11/2019",
];

export const Filter = () => {
  const [filterBy, setFilterBy] = useState("");
  const [visible, setVisible] = useState(false);

  function handleCheckboxChange(type: string) {
    setFilterBy(type);
  }

  return (
    <Container>
      <Select onClick={() => setVisible(!visible)}>
        {visible && !filterBy ? (
          <span style={{ color: "#ec3030ab" }}>Select filter Type first</span>
        ) : (
          "Filter By"
        )}
      </Select>
      {visible && filterBy && (
        <FilterModalList>
          {dateArr.map((el) => (
            <li onClick={() => setVisible(!visible)}>{el}</li>
          ))}
        </FilterModalList>
      )}

      <Checkbox
        value="Event type"
        checked={filterBy}
        onclick={handleCheckboxChange}
      ></Checkbox>
      <Checkbox
        value="Caregiver id"
        checked={filterBy}
        onclick={handleCheckboxChange}
      ></Checkbox>
    </Container>
  );
};
