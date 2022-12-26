import React from "react";
import styled from "styled-components";
import ModalBox from "./ModalBox";

const IntroModal = ({ setIntroModal }) => {
  return (
    <ModalBox>
      <ModalSmallBox>
        <ConfirmButtons onClick={() => setIntroModal(false)}>X</ConfirmButtons>
        <IntroBox>
          <div>안녕하세요! 웹 프론트엔드 개발자 노종열입니다.</div>
          <br />
          <div>
            모두가 <Highlight>필요로 하는 개발자</Highlight>는 단순히 코딩을 잘
            하는 사람이 아닙니다. 따라서
            <Highlight> 근본적인 문제</Highlight>를 해결하는 인물이 되기 위해
            착실한 하루를 보내고 있습니다.
          </div>
          <br />
          <Highlight>동료와 함께하는 것</Highlight>은 늘 새롭고 흥미롭습니다.
          개인의 경험과 생각을을 듣는 것으로 견문을 넓힐 수 있는 기회가 되기
          때문입니다.
        </IntroBox>
      </ModalSmallBox>
    </ModalBox>
  );
};

const ModalSmallBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  height: fit-content;
  background-color: white;
`;

const IntroBox = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.5;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
  }
  @media ${({ theme }) => theme.phone} {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  color: #6366f1;
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

export default IntroModal;
