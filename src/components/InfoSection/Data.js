import Proj1 from "../../images/svg-1.svg";
import headshot from "../../images/headshot.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Full-Stack Javascript Developer",
  headline: "Pat Brown",
  description:
    "Based in Denver, I leverage a seven-year career in content marketing strategy to deliver unified and refreshing user experiences. A graduate of the University of Denver's Full-Stack Development certificate, I hone my engineering skills in modern, scalable, and performant web applications utilizing the MERN+G stack as my preferred development architecture. ",
  buttonLabel: "Technical Skills",
  imgStart: false,
  imgSrc:
    // require("../../images/svg-1.svg"),
    headshot,
  alt: "A handsome young full-stack Javascript developer eaglerly awaiting your call",
  dark: true,
  primary: true,
  darkText: false,
  btnTo: "skills",
};

export const homeObjTwo = {
  id: "skills",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "Languages & Applications",
  headline: "Developer Tools",
  description:
    "JavaScript, TypeScript, Express.js, Node.js, React, React-Native, MongoDB, CSS3, HTML5, mySQL, GraphQL, postgreSQL, Git, RESTful API's, Progressive Web Applications, jQuery",
  buttonLabel: "Projects",
  imgStart: true,
  imgSrc:
    "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80",
  alt: "A handsome young full-stack Javascript developer eaglerly awaiting your call",
  dark: true,
  primary: true,
  darkText: false,
  btnTo: "projects",
};
