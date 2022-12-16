import React from "react";
import styled from "styled-components";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import ProjectSection from "./ProjectSection";

const Home = () => {
  return (
    <MainContainer>
      <HomeSection />
      <ProjectSection />
      <ContactSection />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;
export default Home;
