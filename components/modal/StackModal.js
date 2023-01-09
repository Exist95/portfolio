import React from "react";
import styled from "styled-components";
import ModalBox from "./ModalBox";

const StackModal = ({ setStackModal }) => {
  return (
    <ModalBox>
      <ModalSmallBox>
        <ConfirmButtons onClick={() => setStackModal(false)}>X</ConfirmButtons>
        <StackBox>
          <div style={{ color: "#E14E1D", paddingTop: "50px" }}>HTML5</div>
          <div style={{ color: "#0277BD" }}>CSS3</div>
          <div style={{ color: "#F0DB4F" }}>JavaScript</div>
          <div style={{ color: "#00D8FF" }}>React</div>
          <div style={{ color: "#764ABC" }}>Redux</div>
          <div style={{ color: "#E48B80" }}>Styled-Components</div>
          <div style={{ color: "#F03C2E" }}>Git</div>
        </StackBox>
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
  font-size: 3rem;
  font-weight: 900;
  gap: 20px;

  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.mobile} {
    align-items: center;
  }

  @media ${({ theme }) => theme.phone} {
    height: 4rem;
    font-size: 2rem;
  }
`;

export default StackModal;
