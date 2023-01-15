import React from "react";
import styled from "styled-components";
import Navi from "./Navi";

const Header = () => {
  const goHome = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    //  behavior: "smooth"
  };
  return (
    <HeaderContainer>
      <Heading onClick={goHome}>Jong-Yeol, Noh</Heading>
      <Navi />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 90;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  margin: 0 auto;
  width: 100%;
  height: 7rem;
  font-size: 3rem;
  font-weight: 900;
  padding-bottom: 36px;
  background-color: #e6e6fa;
  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.phone} {
    height: 4rem;
    font-size: 2rem;
  }
  /* @media ${({ theme }) => theme.height} {
    display: none;
  } */
`;

const Heading = styled.h1`
  &:hover {
    cursor: pointer;
    color: white;
  }
  @media ${({ theme }) => theme.mobile} {
    align-self: flex-start;
    display: none;
  }
`;

export default Header;
