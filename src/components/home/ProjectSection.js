import React, { useState } from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const item = [
    { id: 1, project: "paldo", url: "images/paldo.png" },
    { id: 2, project: "bokmango", url: "images/bokmango.png" },
    { id: 3, project: "portfolio", url: "/images/paldo.png" },
  ];

  return (
    <SectionWrapper id="project">
      <Heading>Project</Heading>
      <ProjectBox>
        {item.map(({ project, url, id }, index) => {
          return (
            <ProjectItem
              key={id}
              project={project}
              url={url}
              index={index}
            ></ProjectItem>
          );
        })}
      </ProjectBox>
    </SectionWrapper>
  );
};

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  padding: 9rem 3rem 3rem 3rem;
  font-size: 6rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 6rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

const ProjectBox = styled.ul`
  width: 100%;
  padding: 2rem 20rem 5rem 20rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 3rem;

  @media ${({ theme }) => theme.mobile} {
    flex-flow: column nowrap;
    padding: 1.5rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 0;
  }
`;

export default ProjectSection;
