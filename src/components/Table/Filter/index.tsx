import { useState } from "react";
import {
  Container,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  FilterModalList,
  CloseButton,
} from "./styles";

import {
  filterByArgument,
  filterByCaregiver,
  filterByEvent_types,
} from "../../../utils/filterFunctions";

import checkIcon from "../../../assets/icons/check-bold.svg";

import { EventPropsDTO } from "../../../types/eventPropsDTO";
import { Button } from "../../Button";

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

export const Filter = (props: {
  events: EventPropsDTO[];
  setEventList: (any: EventPropsDTO[]) => void;
}) => {
  const { events, setEventList } = props;
  const [filterBy, setFilterBy] = useState("");
  const [visible, setVisible] = useState(false);

  function handleCheckboxChange(type: any) {
    setFilterBy(type);
  }

  var filteredEvents: any = filterByArgument([...events], "event_type").reduce(
    function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    },
    []
  );

  const filteredCaregivers: any = filterByArgument(
    [...events],
    "caregiver_id"
  ).reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);

  const objects: any = {
    "Caregiver id": filterByCaregiver([...events], filteredCaregivers), // filtered object by date
    "Event type": filterByEvent_types([...events], filteredEvents), // filtered object by event_type
  };

  const handleFilter = (value: string) => {
    setEventList(objects[filterBy][value]);
    setVisible(!visible);
  };

  return (
    <Container>
      <Button
        title={
          visible && !filterBy ? (
            <span style={{ color: "#ec3030ab" }}>Select filter Type first</span>
          ) : (
            "Filter By"
          )
        }
        onclick={() => setVisible(!visible)}
      ></Button>
      {visible &&
        (filterBy === "Caregiver id" ? (
          <FilterModalList>
            <CloseButton onClick={() => setVisible(!visible)}>x</CloseButton>
            {filteredCaregivers.map((el: any, idx: any) => (
              <li id={String(idx)} onClick={() => handleFilter(el)}>
                {el}
              </li>
            ))}
          </FilterModalList>
        ) : filterBy === "Event type" ? (
          <FilterModalList>
            <CloseButton onClick={() => setVisible(!visible)}>x</CloseButton>
            {filteredEvents.map((el: any, idx: any) => (
              <li id={String(idx)} onClick={() => handleFilter(el)}>
                {el.replaceAll("_", " ")}
              </li>
            ))}
          </FilterModalList>
        ) : null)}

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
