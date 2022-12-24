import React, { useRef } from "react";
import styled, { css } from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <SectionWrapper id="contact">
      <ContactBackground>
        <ImageBox />
        <TextBox>
          <Headering>Contact</Headering>
          <TheForm ref={form} onSubmit={sendEmail}>
            <InputBox>
              <InputValue
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                required
              />
            </InputBox>
            <InputBox>
              <InputValue
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                required
              />
            </InputBox>
            <InputBox>
              <InputText
                type="text"
                id="message"
                placeholder="Message"
                rows="8"
                name="message"
                required
              />
            </InputBox>
            <Button type="submit">Send</Button>
          </TheForm>
        </TextBox>
      </ContactBackground>
    </SectionWrapper>
  );
};

const ContactBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  display: flex;
  width: 35rem;
  height: 35rem;
  background-image: url("/images/contactme.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media ${({ theme }) => theme.phone} {
    display: none;
  }
  @media ${({ theme }) => theme.height} {
    width: 20rem;
    height: 20rem;
    font-size: 3rem;
  }
`;

const Headering = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 5px solid black;
`;

const TheForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media ${({ theme }) => theme.phone} {
    gap: 1.5rem;
    padding: 1.5rem;
  }
  @media ${({ theme }) => theme.height} {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  font-size: 4rem;
  font-weight: 900;
  width: 47rem;
  height: 47rem;
  margin-left: 2rem;
  @media ${({ theme }) => theme.laptop} {
    width: 45rem;
    height: 45rem;
  }
  @media ${({ theme }) => theme.tablet} {
    width: 40rem;
    height: 40rem;
  }
  @media ${({ theme }) => theme.mobile} {
    width: 35rem;
    height: 35rem;
  }
  @media ${({ theme }) => theme.height && theme.tablet} {
    font-size: 3rem;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const inputStyle = css`
  border-radius: unset;
  background-color: #e6e6fa;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem;
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  &::placeholder {
    color: gray;
    font-size: 2.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
  }
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    font-size: 2rem;
    &::placeholder {
      font-size: 2rem;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;

const InputValue = styled.input`
  height: 5rem;
  ${inputStyle}
  &:focus {
    outline: none !important;
  }
`;

const InputText = styled.textarea`
  ${inputStyle}
  &:focus {
    outline: none !important;
  }
`;

const Button = styled.button`
  background-color: #e6e6fa;
  border: 3px solid gray;
  color: gray;
  width: 50%;
  font-size: 2rem;
  margin-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    cursor: pointer;
    color: black;
    border-color: black;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
  }
`;

export default ContactSection;
