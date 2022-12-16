import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Navi = ({ oneClick, twoClick, threeClick, one, two, three }) => {
  return (
    <NaviContainer>
      <StNavigation>
        <NaviItem>
          <HashLink
            smooth
            to="/#home"
            style={{ textDecoration: "none" }}
            onClick={oneClick}
          >
            <span style={one ? { color: "white" } : { color: "black" }}>
              About
            </span>
          </HashLink>
        </NaviItem>
        <NaviItem>
          <HashLink
            smooth
            to="/#project"
            style={{ textDecoration: "none", color: "black" }}
            onClick={twoClick}
          >
            <span style={two ? { color: "white" } : { color: "black" }}>
              Project
            </span>
          </HashLink>
        </NaviItem>
        <NaviItem>
          <HashLink
            smooth
            to="/#contact"
            style={{ textDecoration: "none", color: "black" }}
            onClick={threeClick}
          >
            <span style={three ? { color: "white" } : { color: "black" }}>
              Contact
            </span>
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
  column-gap: 3rem;
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
  @media ${({ theme }) => theme.laptop} {
    padding-top: 5px;
  }
  @media ${({ theme }) => theme.mobile} {
    padding-top: 3px;
  }
`;

export default Navi;
