import React from "react";
import { HashLink } from "react-router-hash-link";
import SectionWrapper from "../components/global/SectionWrapper";
import { TiArrowBackOutline } from "react-icons/ti";
import {
  Contain,
  ContentBox,
  ContentText,
  ContentTitle,
  Heading,
  IconBox,
  Image,
  Images,
  ProductImgWrap,
  StyledSlider,
  IconSpan,
} from "./Paldo";
import { FaGithub } from "react-icons/fa";
import { Data } from "../components/home/HomeSection";
import { SlControlPlay } from "react-icons/sl";

const Port = () => {
  const item = [
    {
      id: 300,
      url: "/images/portfolioTitle.png",
    },
    {
      id: 301,
      url: "/images/portfolioMain.png",
    },
    {
      id: 302,
      url: "/images/paldo2.gif",
    },
    {
      id: 303,
      url: "/images/paldo3.gif",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SectionWrapper id="port">
      <Heading>
        개인 포트폴리오
        <div style={{ position: "absolute", left: "10%" }}>
          <HashLink to="/#project">
            <IconSpan>
              <TiArrowBackOutline />
            </IconSpan>
          </HashLink>
        </div>
      </Heading>

      <ProductImgWrap>
        <StyledSlider {...settings}>
          {item.map((x) => {
            return (
              <Image key={x.id}>
                <Images src={x.url} />
              </Image>
            );
          })}
        </StyledSlider>
        <Contain>
          <ContentBox>
            <ContentTitle>Overview</ContentTitle>
            <ContentText>
              부트캠프 종료 후, 이력서와 함께 제출하기 위해 구현한 웹 포트폴리오
              사이트입니다. Scroll이 없는 것이 특징이며 오로지 HashLink로만
              이동할 수 있습니다. 그리고 Slick을 사용하여 슬라이드 형식으로
              프로젝트 이미지를 확인할 수 있게 구성하였습니다.
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Feature</ContentTitle>
            <ContentText>
              메인(About) 페이지, 프로젝트 페이지, 컨텍 페이지, 각 페이지 모든
              기능{" "}
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Skill</ContentTitle>
            <ContentText>Javascript, React, Styled-components</ContentText>
          </ContentBox>
          <IconBox>
            <Data>
              <a
                href="https://github.com/Exist95/portfolio"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </Data>
          </IconBox>
        </Contain>
      </ProductImgWrap>
    </SectionWrapper>
  );
};

export default Port;
