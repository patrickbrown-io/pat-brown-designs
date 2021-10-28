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
            <ButtonR to="/moovie">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>NFTy | NFT eCommerce</ProjectH2>
            <ProjectP>mySQL, Handlebars.js, RESTful API</ProjectP>
            <br />
            <ButtonR to="/nfty">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Redux eCommerce</ProjectH2>
            <ProjectP>Redux, React, MongoDB, Express.js, Node.js</ProjectP>
            <br />
            <ButtonR to="/redux">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>The vibeForecast</ProjectH2>
            <ProjectP>Weather-based Playlist Generator | jQuery</ProjectP>
            <br />
            <ButtonR to="/vibe">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>PWA Budget</ProjectH2>
            <ProjectP>
              Enter deposits and expenses on and offline with this progressive
              web application
            </ProjectP>
            <br />
            <ButtonR to="/budget">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={Proj1} />
            <ProjectH2>Book Search Engine</ProjectH2>
            <ProjectP>
              Fetch and modify your list of books to read with this MERN+G
              Google Books API app
            </ProjectP>
            <br />
            <ButtonR to="/books">See More</ButtonR>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
