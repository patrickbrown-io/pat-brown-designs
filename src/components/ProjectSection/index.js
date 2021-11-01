import React from "react";
import { ButtonA } from "../Button";
import {
  ProjectInfoContainer,
  ProjectInfoWrapper,
  ProjectInfoRow,
  ProjectColumn1,
  ProjectColumn2,
  ProjectTextWrapper,
  ProjectTopLine,
  ProjectHeading,
  ProjectSubtitle,
  ProjectBtnWrap,
  ProjectImg,
  ProjectImgWrap,
} from "./ProjectSection";

const ProjectSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  imgSrc,
  alt,
  primary,
  dark,
  dark2,
  liveSite,
  repoSite,
}) => {
  return (
    <>
      <ProjectInfoContainer lightBg={lightBg} id={id}>
        <ProjectInfoWrapper>
          <ProjectInfoRow imgStart={imgStart}>
            <ProjectColumn1>
              <ProjectTextWrapper>
                <ProjectTopLine>{topLine}</ProjectTopLine>
                <ProjectHeading lightText={lightText}>
                  {headline}
                </ProjectHeading>
                <ProjectSubtitle darkText={darkText}>
                  {description}
                </ProjectSubtitle>
                <ProjectBtnWrap>
                  <ButtonA
                    href={liveSite}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    Demo
                  </ButtonA>
                  <ButtonA
                    href={repoSite}
                    target="_blank"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    Repo
                  </ButtonA>
                </ProjectBtnWrap>
              </ProjectTextWrapper>
            </ProjectColumn1>
            <ProjectColumn2>
              <ProjectImgWrap>
                <ProjectImg src={imgSrc} alt={alt} />
              </ProjectImgWrap>
            </ProjectColumn2>
          </ProjectInfoRow>
        </ProjectInfoWrapper>
      </ProjectInfoContainer>
    </>
  );
};

export default ProjectSection;
