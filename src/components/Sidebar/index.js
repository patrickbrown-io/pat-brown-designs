import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Sidebar";

const Sidebar = ({ isOpen, toggle, contactToggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          exact={true}
          offset={-80}
        >
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle} offset={-80}>
              About
            </SidebarLink>
            <SidebarLink to="projects" onClick={toggle} offset={80}>
              Projects
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle} offset={-80}>
              Skills
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/" onClick={contactToggle} offset={-80}>
              Contact
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
