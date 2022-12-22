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
      <ProjectBackground>
        <Heading />
        <ProjectBox>
          {item.map(({ project, url }, index) => {
            return (
              <ProjectItem
                key={index}
                project={project}
                url={url}
                index={index}
              ></ProjectItem>
            );
          })}
        </ProjectBox>
      </ProjectBackground>
    </SectionWrapper>
  );
};

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  padding: 9rem 3rem 3rem 3rem;
  font-size: 8rem;
  font-weight: 900;
  background-image: url("/images/myproject.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 20rem;
  height: 20rem;
  @media ${({ theme }) => theme.laptop} {
    font-size: 8rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 0rem 1.5rem;
    font-size: 4rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 0rem 1.5rem;
  }
  @media ${({ theme }) => theme.height} {
    width: 250px;
    height: 250px;
  }
`;

const ProjectBackground = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #e6e6fa;
`;

const ProjectBox = styled.ul`
  width: 70%;
  padding: 3rem;
  margin-top: 3rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 3rem;
  @media ${({ theme }) => theme.laptop} {
    width: 60%;
    padding: 1.5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 1.5rem;
  }
  @media ${({ theme }) => theme.phone} {
    display: none;
  }
`;

export default ProjectSection;
