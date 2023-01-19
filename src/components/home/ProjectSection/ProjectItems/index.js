import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import * as S from "./style";

const ProjectItem = ({ project, url, id }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <S.ProjectItemBox>
      <S.ProjectItemWrapper
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <HashLink to={`${"/#" + project}`}>
            <S.ProjectItemHover />
            <S.ProjectItemTextBox>Detail</S.ProjectItemTextBox>
          </HashLink>
        )}
        <S.ProjectItemImage src={url} alt={project} />
      </S.ProjectItemWrapper>
    </S.ProjectItemBox>
  );
};

export default ProjectItem;
