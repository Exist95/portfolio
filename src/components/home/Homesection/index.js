import React from "react";
import SectionWrapper from "../../global/SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import * as S from "./style";
import Stack from "./Stack";

const HomeSection = () => {
  return (
    <SectionWrapper id="home">
      <S.HomeSectionContainer>
        <S.HomeSectionTextBox>
          <S.HomeSectionTitle>
            <div>안녕하세요</div>
            <div>프론트엔드 개발자</div>
            <div>노종열입니다</div>
          </S.HomeSectionTitle>
          <br />
          <Stack />
          <S.HomeSectionIcon>
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
