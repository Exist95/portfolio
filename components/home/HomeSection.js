import React, { useState } from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import IntroModal from "../modal/IntroModal";
import StackModal from "../modal/StackModal";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";

const HomeSection = () => {
  //intro, stack 모달창 구현 (지역상태관리)
  const [introModal, setIntroModal] = useState(false);
  const [stackModal, setStackModal] = useState(false);

  const handleIntroModal = () => {
    setIntroModal(!introModal);
  };

  const handleStackModal = () => {
    setStackModal(!stackModal);
  };

  return (
    <SectionWrapper id="home">
      <HomeBackground>
        <ImageBox />
        <TextBox style={{ marginLeft: "5px" }}>
          <div onClick={handleIntroModal}>Introduce</div>
          <div onClick={handleStackModal}>Stack</div>
          <IconBox>
            <Data>
              <a
                href="https://github.com/Exist95"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </Data>
            <Data>
              <a
                href="https://spiritual-ragdoll-604.notion.site/3dcd47febe6144d6bd84928ca07f1b95"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxNotionLogo />
              </a>
            </Data>
          </IconBox>
        </TextBox>
      </HomeBackground>
      {introModal && <IntroModal setIntroModal={setIntroModal} />}
      {stackModal && <StackModal setStackModal={setStackModal} />}
    </SectionWrapper>
  );
};

const HomeBackground = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  font-size: 6rem;
  font-weight: 800;
  font-style: normal;
  border: 5px solid black;
  width: 35rem;
  height: 35rem;
  padding-left: 5px;
  margin-right: 10px;
  > :nth-child(-n + 2) {
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }

  span {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    @media ${({ theme }) => theme.tablet} {
      font-size: 2rem;
    }
    @media ${({ theme }) => theme.mobile} {
      font-size: 1.5rem;
    }
    @media ${({ theme }) => theme.height} {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.laptop} {
    font-size: 6rem;
    width: 35rem;
    height: 35rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
    width: 35rem;
    height: 35rem;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 5.5rem;
    width: 35rem;
    height: 35rem;
  }
  @media ${({ theme }) => theme.height} {
    width: 20rem;
    height: 20rem;
    font-size: 3rem;
  }
`;

const ImageBox = styled.div`
  display: flex;
  width: 35rem;
  height: 35rem;
  background-image: url("/images/Pic.jpg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.phone} {
    display: none;
  }
  @media ${({ theme }) => theme.height} {
    width: 20rem;
    height: 20rem;
    font-size: 3rem;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Data = styled.div`
  > a {
    color: black;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  & > a:hover {
    color: white;
  }
`;

export default HomeSection;
