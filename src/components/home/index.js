import React from "react";
import ContactSection from "./ContactSection";
import HomeSection from "./Homesection";
import ProjectSection from "./ProjectSection";
import Paldo from "../../projects/PaldoGames";
import Bok from "../../projects/BokMango";
import Port from "../../projects/Portfolio";
import * as S from "./style";

const Home = () => {
  return (
    <S.HomeContainer>
      <HomeSection />
      <ProjectSection />
      <ContactSection />
      <Paldo />
      <Bok />
      <Port />
    </S.HomeContainer>
  );
};

export default Home;
