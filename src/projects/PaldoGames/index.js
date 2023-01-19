import React from "react";
import SectionWrapper from "../../components/global/SectionWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashLink } from "react-router-hash-link";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { SlControlPlay } from "react-icons/sl";
import { CommonDataBox } from "../../components/home/Homesection/style";
import * as S from "../style";

const Paldo = () => {
  const item = [
    {
      id: 91,
      url: "/images/paldo.png",
    },
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
      <S.Heading>
        팔도게임즈
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
              부트캠트 기간 중 참가한 스터디에서 구현하게 된 게임 커뮤니티
              사이트입니다. 총 4개의 게임이 존재하며 각 게임 진행시 일정
              포인트가 차감됩니다. Dynamic Routing 경험을 위해 Next.js를
              사용했으며 OAuth에는 NextAuth, 그리고 DB에는 Prisma를 사용했으며
              Vercel로 배포 되었습니다.
            </S.ContentText>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>Feature</S.ContentTitle>
            <S.ContentText>
              로고 디자인, 메인 페이지, 랭킹 페이지, 로또 게임
            </S.ContentText>
          </S.ContentBox>
          <S.ContentBox>
            <S.ContentTitle>Skill</S.ContentTitle>
            <S.ContentText>
              Javascript, React, Styled-components, Recoil, Next.js, Prisma,
              axios, ESLint, Prettier
            </S.ContentText>
          </S.ContentBox>
          <S.IconBox>
            <CommonDataBox>
              <a
                href="https://github.com/haileyport/PaldoGames"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub />
              </a>
            </CommonDataBox>
            <CommonDataBox>
              <a
                href="https://paldo-games.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SlControlPlay />
              </a>
            </CommonDataBox>
          </S.IconBox>
        </S.Contain>
      </S.ProductImgWrap>
    </SectionWrapper>
  );
};

export default Paldo;
