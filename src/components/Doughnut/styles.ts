import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 10px 0;
`;

export const CenterText = styled.span`
  position: absolute;
  width: 100%;
  top: 35.5%;
  text-align: center;
  /* margin-top: 20px; */
  line-height: 20px;
  font-size: 5rem;
`;
