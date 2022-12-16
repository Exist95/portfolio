import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";

const HomeSection = () => {
  return (
    <SectionWrapper id="home">
      <HomeBackground>asdasdasd</HomeBackground>
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
  background-image: url("/images/homeBG.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default HomeSection;
