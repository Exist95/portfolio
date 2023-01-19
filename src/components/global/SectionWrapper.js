import React from "react";
import styled from "styled-components";

const SectionWrapper = ({ id, children }) => {
  return <SectionContaioner id={id}>{children}</SectionContaioner>;
};
const SectionContaioner = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  color: black;
  scroll-snap-align: start;
  overflow: hidden;
`;
export default SectionWrapper;
