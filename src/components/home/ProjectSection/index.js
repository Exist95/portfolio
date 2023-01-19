import React from "react";
import SectionWrapper from "../../global/SectionWrapper";
import ProjectItem from "./ProjectItems";
import * as S from "./style";

const ProjectSection = () => {
  const item = [
    { id: 1, project: "paldo", url: "images/paldo.png" },
    { id: 2, project: "bok", url: "images/bokmango.png" },
    { id: 3, project: "port", url: "/images/portfolioTitle.png" },
  ];

  return (
    <SectionWrapper id="project">
      <S.ProjectHeading>Project</S.ProjectHeading>
      <S.ProjectBox>
        {item.map(({ project, url, id }, index) => {
          return (
            <ProjectItem key={id} project={project} url={url} index={index} />
          );
        })}
      </S.ProjectBox>
    </SectionWrapper>
  );
};

export default ProjectSection;
