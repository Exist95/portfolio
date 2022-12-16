import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";

const HomeSection = () => {
  return (
    <SectionWrapper id="home">
      <HomeBackground>
        <TextBox>
          <div>Hi !</div>
          <div>Front Developer.</div>
          <div>JongYeol, Noh.</div>
        </TextBox>
        <TextFooter>Viva Magenta</TextFooter>
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
  background-color: #c0665b;
`;

const TextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: black;
  font-size: 10rem;
  font-weight: 900;
  font-style: italic;

  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 3rem;
  }
`;

const TextFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  font-size: 4rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }
`;

export default HomeSection;
