import React, { useRef } from "react";
import emailjs from "emailjs-com";

import {
  ContactBarContainer,
  Icon,
  CloseIcon,
  ContactBarWrapper,
  ContactBarMenu,
  ContactBarInput,
  SideBtnWrap,
  BigContactBarInput,
  ContactH1,
} from "./ContactBar";
import { ButtonS } from "../Button";

import ScrollToTop from "../ScrollToTop";

const ContactBar = ({ contactOpen, contactToggle }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1fk7jfc",
        "template_y57t2gl",
        e.target,
        "user_WqtYSk3J7sWCl8zK6WLaJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <ScrollToTop />
      <ContactBarContainer contactOpen={contactOpen}>
        <Icon smooth={true} duration={500} spy={true} exact={true} offset={-80}>
          <CloseIcon onClick={contactToggle} />
        </Icon>
        <ContactBarWrapper ref={form} onSubmit={sendEmail}>
          <ContactH1>Contact Me</ContactH1>
          <ContactBarMenu>
            <ContactBarInput
              type="text"
              name="name"
              placeholder="Name"
            ></ContactBarInput>
            <ContactBarInput
              type="text"
              name="email"
              placeholder="Email Address"
            ></ContactBarInput>
            <BigContactBarInput
              type="text"
              name="message"
              placeholder="Provide as much detail as possible in your request -- project guidelines, timeline, questions...anything at all! I will get back to you within 2 business days"
            ></BigContactBarInput>
          </ContactBarMenu>
          <SideBtnWrap>
            <ButtonS type="submit" value="Send">
              Send
            </ButtonS>
          </SideBtnWrap>
        </ContactBarWrapper>
      </ContactBarContainer>
    </>
  );
};

export default ContactBar;
