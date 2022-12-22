import React, { useState } from "react";
import styled from "styled-components";

const ProjectItem = ({ project, url }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <ProjectBox>
      <ImageWrapper
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <>
            <HoverCover />
            <TextBox>Detail</TextBox>
          </>
        )}
        <Image src={url} alt={project} />
      </ImageWrapper>
    </ProjectBox>
  );
};

const ProjectBox = styled.li`
  width: calc((100% / 2) - 1.5rem);
  position: relative;
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

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
