import React from "react";
import Proj1 from "../../images/svg-1.svg";
import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./Project";

import { Button } from "../Button";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectH1>Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
