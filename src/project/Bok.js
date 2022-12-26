import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";
import { FaGithub } from "react-icons/fa";
import { Data } from "../components/home/HomeSection";
import { SlControlPlay } from "react-icons/sl";
import SectionWrapper from "../components/global/SectionWrapper";
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

const Bok = () => {
  const item = [
    {
      id: 200,
      url: "/images/bokmango.png",
    },
    {
      id: 201,
      url: "/images/bok1.gif",
    },
    {
      id: 203,
      url: "/images/bok3.gif",
    },
    {
      id: 204,
      url: "/images/bok4.gif",
    },
    {
      id: 205,
      url: "/images/bok5.gif",
    },
    {
      id: 206,
      url: "/images/bok6.gif",
    },
    {
      id: 207,
      url: "/images/bok7.gif",
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
    <SectionWrapper id="bok">
      <Heading>
        새해복망고
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
              부트캠트에서 만든 메인 프로젝트입니다. 트랜드에 따라 모바일
              퍼스트로 화면을 구성했으며, 프로젝트 기간과 가까운 기념일인 새해를
              컨셉으로 잡았습니다. 유저들은 자신의 복망고를 여러개 만들 수
              있으며 카카오톡으로 공유를 하여 지인에게 덕담 복주머니를 받을 수
              있습니다. Typescript를 처음 프로젝트에 적용해보고 백엔드와의
              협업을 했다는 것으로 크게 만족한 작품입니다. 백엔드는 AWS의 EC2로
              배포되었으며 프론트엔드는 Vercel을 이용하여 배포하였습니다.
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Feature</ContentTitle>
            <ContentText>
              회원가입 페이지, 로그인 페이지, 마이 페이지, 유효성 검사, 로그인,
              아이디 저장, 비밀번호 찾기, 모달
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Skill</ContentTitle>
            <ContentText>
              Typescript, React, Tailwind, Recoil, Next.js, axios, ESLint,
              Prettier
            </ContentText>
          </ContentBox>
          <IconBox>
            <Data>
              <a
                href="https://github.com/codestates-seb/seb40_main_023"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </Data>
            <Data>
              <a
                href="https://applemango.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SlControlPlay />
              </a>
            </Data>
          </IconBox>
        </Contain>
      </ProductImgWrap>
    </SectionWrapper>
  );
};

export default Bok;
