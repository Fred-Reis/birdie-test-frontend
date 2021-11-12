import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalWrapper = styled.div`
  padding: 60px 30px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  z-index: 99999;
  border-radius: 10px;
  margin: 100px;
`;

export const ModalContent = styled.div`
  display: flex;

  min-height: 300px;
  min-width: 300px;
  padding: 30px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primary-blue);
  border: 2px solid var(--primary-green);
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }

  label {
    margin: 0;
    font-size: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: var(--primary-green);
`;
