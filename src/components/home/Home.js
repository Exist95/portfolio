import React from "react";
import styled from "styled-components";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectSection from "./ProjectSection";
import Paldo from "../../project/Paldo";
import Bok from "../../project/Bok";
import Port from "../../project/Port";

const Home = () => {
  return (
    <MainContainer>
      <HomeSection />
      <ProjectSection />
      <ContactSection />
      <Paldo />
      <Bok />
      <Port />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: #e6e6fa;
`;
export default Home;
