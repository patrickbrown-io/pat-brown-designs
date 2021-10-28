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

import { ButtonR } from "../Button";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectH1>Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>moovie | Movie Reviews</ProjectH2>
            <ProjectP>React, MongoDB, Express.js, Node.js, GraphQl</ProjectP>
            <br />
            <ButtonR to="/moovie">Demo</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>NFTy | NFT eCommerce</ProjectH2>
            <ProjectP>mySQL, Handlebars.js, RESTful API</ProjectP>
            <br />
            <ButtonR to="/nfty">Demo</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Redux eCommerce</ProjectH2>
            <ProjectP>Redux, React, MongoDB, Express.js, Node.js</ProjectP>
            <br />
            <ButtonR to="/redux">Demo</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>The vibeForecast</ProjectH2>
            <ProjectP>Weather-based Playlist Generator | jQuery</ProjectP>
            <br />
            <ButtonR to="/ecommerce">Demo</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
            <br />
            <ButtonR to="/contact">Demo</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Text</ProjectH2>
            <ProjectP>Project paragraph is here this is a lot of text</ProjectP>
            <br />
            <ButtonR to="/contact">Demo</ButtonR>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
