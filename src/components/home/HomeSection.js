import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import { TextFooter } from "../global/TextFooter";

const HomeSection = () => {
  return (
    <SectionWrapper id="home">
      <HomeBackground>
        <TextBox>
          <div style={{ padding: "0px" }}>
            <div>Front Developer-</div>
          </div>
          <div style={{ padding: "00px" }}>
            <div>JongYeol,</div>
            <div style={{ paddingTop: "5px" }}>Noh</div>
          </div>
        </TextBox>
      </HomeBackground>
    </SectionWrapper>
  );
};

const HomeBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #a6cae5;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  color: white;
  font-size: 7rem;
  font-weight: 900;
  font-style: normal;
  border: 5px solid white;
  width: 47rem;
  height: 47rem;
  padding-left: 5px;

  @media ${({ theme }) => theme.laptop} {
    font-size: 6rem;
    width: 45rem;
    height: 45rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
    width: 40rem;
    height: 40rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 5rem;
    width: 35rem;
    height: 35rem;
  }

  @media ${({ theme }) => theme.height} {
    width: 20rem;
    height: 20rem;
    font-size: 3rem;
  }
`;

export default HomeSection;
