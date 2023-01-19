import Slider from "react-slick";
import styled from "styled-components";

export const ContentBox = styled.div`
  font-weight: 900;
  padding-bottom: 5px;
`;

export const ContentTitle = styled.div`
  font-size: 2rem;
  text-decoration: underline 1px black solid;
  padding-bottom: 0.4rem;
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
