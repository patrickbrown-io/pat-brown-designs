import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
} from "../Navbar/Navbar";
import { ProjNavLinks } from "./ProjNav";

const ProjNavbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="/"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={0}
          >
            pbdesigns
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <ProjNavLinks
                to="/#about"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                About
              </ProjNavLinks>
            </NavItem>
            <NavItem>
              <ProjNavLinks
                to="/#projects"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Projects
              </ProjNavLinks>
            </NavItem>
            <NavItem>
              <ProjNavLinks
                to="/#skills"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Tools
              </ProjNavLinks>
            </NavItem>
            <NavItem>
              <ProjNavLinks
                to="/#contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={30}
              >
                Contact
              </ProjNavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default ProjNavbar;
