import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeBtnWrapper,
  HomeH1,
  HomeP,
  ArrowForward,
  ArrowRight,
} from "./Welcome";

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>pat brown designs</HomeH1>
        <HomeP>Delivering modern user experiences</HomeP>
        <HomeBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Who is Pat? {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
