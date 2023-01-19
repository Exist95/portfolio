import styled from "styled-components";

export const ProjectItemBox = styled.div`
  width: 100%;
  position: relative;
`;

export const ProjectItemWrapper = styled.div`
  overflow: hidden;
`;

export const ProjectItemHover = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

export const ProjectItemImage = styled.img`
  width: 100%;
  transition: all 0.5s ease;
`;

export const ProjectItemTextBox = styled.div`
  position: absolute;
  color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
  font-weight: 900;
  cursor: pointer;
  @media ${({ theme }) => theme.tablet} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.phone} {
    font-size: 2rem;
  }
`;
