import React from "react";
import styled from "styled-components";
import SectionWrapper from "../components/global/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from "react-router-hash-link";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { Data } from "../components/home/HomeSection";
import { SlControlPlay } from "react-icons/sl";

const Paldo = () => {
  const item = [
    {
      id: 100,
      url: "/images/paldo1.gif",
    },
    {
      id: 102,
      url: "/images/paldo2.gif",
    },
    {
      id: 103,
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
    <SectionWrapper id="paldo">
      <Heading>
        팔도게임즈
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
              부트캠트 기간 중 참가한 스터디에서 구현하게 된 게임 커뮤니티
              사이트입니다. 총 4개의 게임이 존재하며 각 게임 진행시 일정
              포인트가 차감됩니다. Dynamic Routing 경험을 위해 Next.js를
              사용했으며 OAuth에는 NextAuth, 그리고 DB에는 Prisma를 사용했으며
              Vercel로 배포 되었습니다.
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Feature</ContentTitle>
            <ContentText>
              로고 디자인, 메인 페이지, 랭킹 페이지, 로또 게임
            </ContentText>
          </ContentBox>
          <ContentBox>
            <ContentTitle>Skill</ContentTitle>
            <ContentText>
              Javascript, React, Styled-components, Recoil, Next.js, Prisma,
              axios, ESLint, Prettier
            </ContentText>
          </ContentBox>
          <IconBox>
            <Data>
              <a
                href="https://github.com/haileyport/PaldoGames"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </Data>
            <Data>
              <a
                href="https://paldo-games.vercel.app/"
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

export const ContentBox = styled.div`
  font-weight: 900;
  padding-bottom: 5px;
`;

export const ContentTitle = styled.div`
  font-size: 2rem;
  text-decoration: underline 1px black solid;
  padding-bottom: 1rem;
  min-width: 20rem;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;
export const ContentText = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 12px;
`;

export const Contain = styled.div``;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  gap: 2rem;
  padding-top: 2rem;
  &:hover {
    color: white;
  }
`;

export const Heading = styled.h2`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 9rem 3rem 2rem 3rem;
  font-size: 4rem;
  font-weight: 900;
  @media ${({ theme }) => theme.desktop} {
    padding-bottom: 1rem;
  }
  @media ${({ theme }) => theme.laptop} {
    padding-bottom: 1rem;
  }
  @media ${({ theme }) => theme.tablet} {
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 10rem 1.5rem 1rem 1.5rem;
  }
`;

export const ProductImgWrap = styled.div`
  position: absolute;
  left: calc(50% - 40rem);
  width: 80rem;
  border-radius: 10px;
  @media ${({ theme }) => theme.laptop} {
    left: calc(50% - 30rem);
    width: 60rem;
  }
  @media ${({ theme }) => theme.tablet} {
  }
  @media ${({ theme }) => theme.mobile} {
    padding-top: 2rem;
  }
  @media ${({ theme }) => theme.phone} {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

export const Images = styled.img`
  width: 100%;
  height: 40rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.laptop} {
    height: 30rem;
  }
  @media ${({ theme }) => theme.tablet} {
    height: 30rem;
  }
  @media ${({ theme }) => theme.phone} {
    height: 30rem;
  }
`;

export const Image = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const StyledSlider = styled(Slider)`
  .slick-arrow {
    &::before {
      color: #6366f1;
      font-weight: 900;
      transition: all 0.5s;
      &:hover {
        background-color: #4f46e5;
        cursor: pointer;
      }
    }
  }
  .slick-prev {
    left: 0% !important;
    z-index: 1000;
  }
  .slick-next {
    right: 0% !important;
    z-index: 1000;
  }
  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 5%;
    transform: translate(-50%, -50%);
  }
  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 3.5px;
  }
  .slick-dots li button {
    width: 6px;
    height: 6px;
  }
  .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: #6366f1;
  }
  .slick-dots li.slick-active button:before {
    color: #4f46e5 !important;
  }
  li {
    margin: 0;
    padding: 0;
  }
`;

export const IconSpan = styled.span`
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export default Paldo;
