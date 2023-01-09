import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const ProjectItem = ({ project, url, id }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <ProjectBox>
      <ImageWrapper
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <HashLink to={`${"/#" + project}`}>
            <HoverCover />
            <TextBox>Detail</TextBox>
          </HashLink>
        )}
        <Image src={url} alt={project} />
      </ImageWrapper>
    </ProjectBox>
  );
};

const ProjectBox = styled.div`
  width: 100%;
  position: relative;
`;

const ImageWrapper = styled.div``;

const HoverCover = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

const Image = styled.img`
  width: 100%;
  transition: all 0.5s ease;
`;

const TextBox = styled.div`
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
export default ProjectItem;
