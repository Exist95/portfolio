import React, { useState } from "react";
import styled from "styled-components";
import Navi from "./Navi";

const Header = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const oneClick = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
  };
  const twoClick = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
  };
  const threeClick = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
  };

  return (
    <HeaderContainer>
      <Name>
        Noh's Portfolio<span>{" with 2023 Color"}</span>
      </Name>
      <Navi
        oneClick={oneClick}
        twoClick={twoClick}
        threeClick={threeClick}
        one={one}
        two={two}
        three={three}
      />
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
  border-bottom: 2px solid black;

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
  color: black;
  > span {
    font-size: 1rem;
    @media ${({ theme }) => theme.laptop} {
      font-size: 1rem;
    }

    @media ${({ theme }) => theme.mobile} {
      display: none;
    }

    @media ${({ theme }) => theme.phone} {
      display: none;
    }
  }
`;

export default Header;
