import React, { useState } from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";

const HomeSection = () => {
  //intro, stack 모달창 구현 (지역상태관리)

  return (
    <SectionWrapper id="home">
      <HomeBackground>
        <ImageBox />
        <TextBox style={{ marginLeft: "5px" }}>
          <div>Introduce</div>
          <div>Stack</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              Front-End
            </span>
            <div>JongYeol, Noh</div>
          </div>
        </TextBox>
      </HomeBackground>
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
  background-color: #e6e6fa;
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
  > :nth-child(3) {
    > div {
      font-size: 3rem;
      display: flex;
      justify-content: center;
      @media ${({ theme }) => theme.height} {
        font-size: 2rem;
      }
    }
  }
  > :nth-child(n) {
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

export default HomeSection;
