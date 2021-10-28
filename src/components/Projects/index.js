import React from "react";
import Proj1 from "../../images/svg-1.svg";
import cow from "../../images/moovie.jpg";
import budget from "../../images/budget.jpg";
import book from "../../images/book.jpg";

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
            <ProjectIcon src={cow} />
            <ProjectH2>moovie | Movie Reviews</ProjectH2>
            <ProjectP>React, MongoDB, Express.js, Node.js, GraphQl</ProjectP>
            <br />
            <ButtonR to="/moovie">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src="https://github.com/HavoxPrime/NFTy/raw/main/public/images/NFTylogo.png" />
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
            <ProjectIcon src="https://images.unsplash.com/photo-1555580399-49e780f216b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3774&q=80" />
            <ProjectH2>The vibeForecast</ProjectH2>
            <ProjectP>Weather-based Playlist Generator | jQuery</ProjectP>
            <br />
            <ButtonR to="/vibe">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={budget} />
            <ProjectH2>PWA Budget</ProjectH2>
            <ProjectP>Enter deposits & expenses offline | PWA</ProjectP>
            <br />
            <ButtonR to="/budget">See More</ButtonR>
          </ProjectCard>

          <ProjectCard>
            <ProjectIcon src={book} />
            <ProjectH2>Book Search Engine</ProjectH2>
            <ProjectP>Find and save your favorite books | MERN+G </ProjectP>
            <br />
            <ButtonR to="/books">See More</ButtonR>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
