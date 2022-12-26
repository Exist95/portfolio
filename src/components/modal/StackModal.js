import React from "react";
import styled from "styled-components";
import ModalBox from "./ModalBox";

const StackModal = ({ setStackModal }) => {
  return (
    <ModalBox>
      <ModalSmallBox>
        <ConfirmButtons onClick={() => setStackModal(false)}>X</ConfirmButtons>
        <StackBox />
      </ModalSmallBox>
    </ModalBox>
  );
};

const ModalSmallBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 420px;
  height: 450px;
  background-color: white;
  @media screen and (max-width: 400px) {
    display: none;
  }
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

const StackBox = styled.div`
  width: 400px;
  height: 430px;
  margin-top: 10px;
  background-image: url("/images/stack.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export default StackModal;
