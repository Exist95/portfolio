import React, { useRef } from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      "template_cyckndc",
      form.current,
      "1nTjbh12DvyI4GNki"
    );
  };
  return (
    <SectionWrapper id="contact">
      <ContactBackground>
        <TextBox></TextBox>
      </ContactBackground>
    </SectionWrapper>
  );
};

const ContactBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #e6e6fa;
  width: 100%;
  height: 100vh;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  color: white;
  font-size: 7rem;
  font-weight: 900;
  font-style: normal;
  border: 5px solid white;
  width: 47rem;
  height: 47rem;
  padding-left: 5px;

  @media ${({ theme }) => theme.laptop} {
    font-size: 6rem;
    width: 45rem;
    height: 45rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
    width: 40rem;
    height: 40rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 5rem;
    width: 35rem;
    height: 35rem;
  }

  @media ${({ theme }) => theme.height} {
    width: 20rem;
    height: 20rem;
    font-size: 3rem;
  }
`;

export default ContactSection;
