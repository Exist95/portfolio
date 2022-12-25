import React from "react";
import styled from "styled-components";
import SectionWrapper from "../components/global/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Paldo = () => {
  const item = [
    {
      id: 99,
      url: "/images/paldo.png",
      content: "메인 화면입니다.",
    },
    {
      id: 100,
      url: "/images/paldo1.gif",
      content: "OAuth 로그인 및 메인 페이지입니다.",
    },
    {
      id: 102,
      url: "/images/paldo2.gif",
      content: "게임 페이지입니다.",
    },
    {
      id: 103,
      url: "/images/paldo3.gif",
      content: "커뮤니티 페이지 및 랭킹 페이지입니다.",
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
      <Heading>팔도게임즈</Heading>
      <ProductImgWrap>
        <StyledSlider {...settings}>
          {item.map((x) => {
            return (
              <Image key={x.id}>
                <Images src={x.url} />
                <div>{x.content}</div>
              </Image>
            );
          })}
        </StyledSlider>
      </ProductImgWrap>
    </SectionWrapper>
  );
};

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  padding: 9rem 3rem 2rem 3rem;
  font-size: 5rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 5rem;
    padding-bottom: 5rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 4rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 10rem 1.5rem 1rem 1.5rem;
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 10rem 1.5rem 1rem 1.5rem;
  }
`;

const ProductImgWrap = styled.div`
  position: absolute;
  left: calc(50% - 40rem);
  width: 80rem;
  border-radius: 10px;
  padding-top: 2%;
  @media ${({ theme }) => theme.laptop} {
    left: calc(50% - 30rem);
    width: 60rem;
  }
  @media ${({ theme }) => theme.tablet} {
  }
  @media ${({ theme }) => theme.mobile} {
    padding-top: 15%;
  }
  @media ${({ theme }) => theme.phone} {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const Images = styled.img`
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.laptop} {
    height: 40rem;
  }
  @media ${({ theme }) => theme.tablet} {
    height: 40rem;
  }
  @media ${({ theme }) => theme.phone} {
    height: 30rem;
  }
`;

const Image = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const StyledSlider = styled(Slider)`
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
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: white !important;
  }
  li {
    margin: 0;
    padding: 0;
  }
`;

export default Paldo;
