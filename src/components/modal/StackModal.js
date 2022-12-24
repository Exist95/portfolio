import React from "react";
import styled from "styled-components";
import ModalBox from "./ModalBox";

const StackModal = ({ setStackModal }) => {
  return (
    <ModalBox>
      <ModalSmallBox>
        <ConfirmButtons onClick={() => setStackModal(false)}>X</ConfirmButtons>
      </ModalSmallBox>
    </ModalBox>
  );
};

const ModalSmallBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  height: 50%;
  background-color: white;
`;

const ConfirmButtons = styled.button`
  display: flex;
  position: absolute;
  right: 0;
  margin: 0 auto;
  color: #fff;
  background-color: #6366f1;
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &:hover {
    background-color: #4f46e5;
    cursor: pointer;
  }
`;

export default StackModal;
