import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";

const ProjectSection = () => {
  return (
    <SectionWrapper id="project">
      <ProjectBackground>
        <ProjectHead>Project</ProjectHead>
      </ProjectBackground>
    </SectionWrapper>
  );
};

const ProjectHead = styled.h2`
  padding: 9rem 3rem 3rem 3rem;
  font-size: 9rem;
  font-weight: 900;
  cursor: default;

  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

const ProjectBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bc2749;
`;

export default ProjectSection;
