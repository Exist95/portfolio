import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <ContactBackground>ContactSection</ContactBackground>
    </SectionWrapper>
  );
};

const ContactBackground = styled.div`
  background-color: #aba0c6;
  width: 100%;
  height: 100vh;
`;

const TextFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  font-size: 4rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }
`;

export default ContactSection;
