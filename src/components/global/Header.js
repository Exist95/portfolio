import React from "react";
import styled from "styled-components";
import Navi from "./Navi";

const Header = () => {
  return (
    <HeaderContainer>
      <Name>JY Noh, Portfolio</Name>
      <Navi />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin: 0 auto;
  width: 100%;
  height: 6rem;
  font-size: 20px;
  font-weight: 900;
  padding-bottom: 36px;
  border-bottom: 1px solid black;

  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.mobile} {
    align-items: center;
  }

  @media ${({ theme }) => theme.phone} {
    height: 4rem;
    font-size: 2rem;
    margin-top: 5px;
  }
`;

const Name = styled.h1`
  &:hover {
    color: ${({ theme }) => theme.title};
  }
`;

export default Header;
