import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Navi = () => {
  return (
    <NaviContainer>
      <StNavigation>
        <NaviItem>
          <HashLink
            smooth
            to="/#home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tag>About</Tag>
          </HashLink>
        </NaviItem>
        <NaviItem>
          <HashLink
            smooth
            to="/#project"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tag>Project</Tag>
          </HashLink>
        </NaviItem>
        <NaviItem>
          <HashLink
            smooth
            to="/#contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Tag>Contact</Tag>
          </HashLink>
        </NaviItem>
      </StNavigation>
    </NaviContainer>
  );
};

const NaviContainer = styled.nav`
  display: flex;
`;

const StNavigation = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 5rem;
  font-size: 3rem;
  font-weight: 900;

  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }

  @media ${({ theme }) => theme.mobile} {
    align-items: center;
  }

  @media ${({ theme }) => theme.phone} {
    height: 4rem;
    font-size: 2rem;
  }
`;

const NaviItem = styled.li`
  :nth-child(n) {
    text-decoration: none;
    color: black;
  }

  @media ${({ theme }) => theme.laptop} {
    padding-top: 5px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding-top: 3px;
  }
`;

const Tag = styled.div`
  &:hover {
    color: white;
  }
`;

export default Navi;
