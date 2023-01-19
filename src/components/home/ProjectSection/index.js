import Aos from "aos";
import React, { useEffect } from "react";
import SectionWrapper from "../../global/SectionWrapper";
import ProjectItem from "./ProjectItems";
import * as S from "./style";

const ProjectSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  });

  const item = [
    { id: 1, project: "paldo", url: "images/paldo.png" },
    { id: 2, project: "bok", url: "images/bokmango.png" },
    { id: 3, project: "port", url: "/images/portfolioTitle.png" },
  ];

  return (
    <SectionWrapper id="project">
      <S.ProjectHeading>Project</S.ProjectHeading>
      <S.ProjectBox data-aos="fade-left" data-aos-offset="500">
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
