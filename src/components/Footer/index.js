import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  ArrowForward,
} from "./Footer";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Documents</FooterLinkTitle>
              <FooterLink link="/">// resume</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social</FooterLinkTitle>

              <FooterLink
                href="https://www.linkedin.com/in/pat-r-brown/"
                target="_blank"
              >
                // linkedin
              </FooterLink>
              <FooterLink
                target="_blank"
                href="https://github.com/patrickbrown-io"
              >
                // github
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
              <FooterLink
                href="mailto:patbrowndesigns@gmail.com"
                target="_blank"
              >
                // email
              </FooterLink>
              <FooterLink href="tel:8123229561">// call</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
