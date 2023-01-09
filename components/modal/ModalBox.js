import React from "react";
import styled, { keyframes } from "styled-components";

const ModalBox = (props) => {
  return (
    <ModalBoxing>
      <ModalMidBox>
        <ModalMiddleBox>{props.children}</ModalMiddleBox>
      </ModalMidBox>
    </ModalBoxing>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBoxing = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 55;
  animation: ${fadeIn} 0.7s;
`;

const ModalMidBox = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: #e6e6fa;
  border-width: 1px;
  border-radius: 0.75rem;
`;

const ModalMiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default ModalBox;
