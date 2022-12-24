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
            <Highlight>근본적인 문제</Highlight>를 해결하는 개발자가 되기 위해
            매일 공부하고 있습니다.
            <div>
              저의 <Highlight>원동력</Highlight>은<Highlight> 어제</Highlight>
              입니다. 어제보다 나은 <Highlight>오늘</Highlight>이 되기 위해
              매순간을 착실히 살아가고 있습니다.{" "}
            </div>
            동료와 함께하는 것은 늘 새롭고 흥미롭습니다. 다양한 분야의 이야기도
            들을 수 있으며 각자의 브레인스토밍은 완전히 다른 세계를 보는 기분을
            느끼게 해줍니다.
          </div>
        </IntroBox>
      </ModalSmallBox>
    </ModalBox>
  );
};

const ModalSmallBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  height: 50%;
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
