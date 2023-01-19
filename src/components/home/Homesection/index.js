import React, { useEffect } from "react";
import SectionWrapper from "../../global/SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import * as S from "./style";
import Aos from "aos";
import Profile from "./Profile";

const HomeSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  });

  return (
    <SectionWrapper id="home">
      <S.HomeSectionContainer>
        <S.HomeSectionTextBox>
          <S.HomeSectionTitle
            data-aos="fade-in"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            <div>I'm</div>
            <div>JongYeol Noh.</div>
            <div>Frontend Dev.</div>
          </S.HomeSectionTitle>
          <br />
          <Profile />
          <S.HomeSectionIcon
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            <S.CommonDataBox>
              <a
                href="https://github.com/Exist95"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </S.CommonDataBox>
            <S.CommonDataBox>
              <a
                href="https://spiritual-ragdoll-604.notion.site/3dcd47febe6144d6bd84928ca07f1b95"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxNotionLogo />
              </a>
            </S.CommonDataBox>
          </S.HomeSectionIcon>
        </S.HomeSectionTextBox>
      </S.HomeSectionContainer>
    </SectionWrapper>
  );
};

export default HomeSection;
