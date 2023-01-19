import React from "react";
import { HashLink } from "react-router-hash-link";
import SectionWrapper from "../../components/global/SectionWrapper";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { CommonDataBox } from "../../components/home/Homesection/style";
import * as S from "../style";

const Port = () => {
  const item = [
    {
      id: 300,
      url: "/images/portfolioTitle.png",
    },
    {
      id: 301,
      url: "/images/port1.gif",
    },
    {
      id: 302,
      url: "/images/port2.gif",
    },
    {
      id: 303,
      url: "/images/port3.gif",
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
      <S.Heading>
        개인 포트폴리오
        <div style={{ position: "absolute", left: "10%" }}>
          <HashLink to="/#project">
            <S.IconSpan>
              <TiArrowBackOutline />
            </S.IconSpan>
          </HashLink>
        </div>
      </S.Heading>

      <S.ProductImgWrap>
        <S.StyledSlider {...settings}>
          {item.map((x) => {
            return (
              <S.Image key={x.id}>
                <S.Images src={x.url} />
              </S.Image>
            );
          })}
        </S.StyledSlider>
        <S.Contain>
          <S.ContentBox>
            <S.ContentTitle>Overview</S.ContentTitle>
            <S.ContentText>
              부트캠프 종료 후, 이력서와 함께 제출하기 위해 구현한 웹 포트폴리오
              사이트입니다. Scroll이 없는 것이 특징이며 오로지 HashLink로만
              이동할 수 있습니다. 그리고 Slick을 사용하여 슬라이드 형식으로
              프로젝트 이미지를 확인할 수 있게 구성하였습니다.
            </S.ContentText>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>Feature</S.ContentTitle>
            <S.ContentText>
              메인(About) 페이지, 프로젝트 페이지, 컨텍 페이지, 각 페이지 모든
              기능{" "}
            </S.ContentText>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>Skill</S.ContentTitle>
            <S.ContentText>Javascript, React, Styled-components</S.ContentText>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>Retrospection</S.ContentTitle>
            <CommonDataBox style={{ marginTop: "3px" }}>
              <a
                href="https://spiritual-ragdoll-604.notion.site/Portfolio-eedc60ed43f4466fb963e6b7c2597c97"
                target="_blank"
                rel="noreferrer noopener"
              >
                개인 포트폴리오 회고
              </a>
            </CommonDataBox>
          </S.ContentBox>
          <S.IconBox>
            <CommonDataBox>
              <a
                href="https://github.com/Exist95/portfolio"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </CommonDataBox>
          </S.IconBox>
        </S.Contain>
      </S.ProductImgWrap>
    </SectionWrapper>
  );
};

export default Port;
