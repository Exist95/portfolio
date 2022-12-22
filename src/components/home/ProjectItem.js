import React from "react";
import styled from "styled-components";

const ProjectItem = ({ filename, name, index }) => {
  return (
    <div>
      <SibalBox>{filename}</SibalBox>
    </div>
  );
};

const SibalBox = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: white;
`;

export default ProjectItem;
