import Proj1 from "../../images/svg-1.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Full-Stack Javascript Developer",
  headline: "Pat Brown",
  description:
    "Based in Denver, I leverage a seven-year career in content marketing strategy to deliver unified and refreshing user experiences. Graduate of the University of Denver's Full-Stack Development certificate hone my engineering skills in modern scalable and performant web applications utilizing the MERN+G stack as my preferred development architecture. ",
  buttonLabel: "Technical Skills",
  imgStart: false,
  imgSrc:
    // require("../../images/svg-1.svg"),
    "https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_100_100/0/1592799089030?e=1640822400&v=beta&t=aRCGyOK0Y-B3eFRVY0Z9Cbju4ZUYkAOhGgUnTFEnSjI",
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
    "JavaScript, Express.js, Node.js, React.js, MongoDB, CSS3, HTML5, mySQL, GraphQL, postgreSQL, Github, RESTful API's, Progressive Web Applications, jQuery",
  buttonLabel: "Projects",
  imgStart: true,
  imgSrc: { Proj1 },
  // "https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_100_100/0/1592799089030?e=1640822400&v=beta&t=aRCGyOK0Y-B3eFRVY0Z9Cbju4ZUYkAOhGgUnTFEnSjI",
  alt: "A handsome young full-stack Javascript developer eaglerly awaiting your call",
  dark: true,
  primary: true,
  darkText: false,
  btnTo: "projects",
};

// moovie
export const homeObjThree = {
  id: "moovie",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: "A MERN+G Stack Movie Application",
  headline: "Moovie",
  description:
    "Working with a team of full-stack developers at DU's Full Stack Program, for a final project we developed a movie review platform where users can save lists of movies to their favorites and enter comments about each movie. For this project, I took the lead on front-end development and implementing JSON web tokens as user authentication",
  buttonLabel: "Projects",
  imgStart: true,
  imgSrc:
    "https://raw.githubusercontent.com/bill-hennessey/Proj3/main/assets/images/Moovie-screenshot.png",
  // "https://media-exp1.licdn.com/dms/image/C4E03AQG3tQ4GX-RDgQ/profile-displayphoto-shrink_100_100/0/1592799089030?e=1640822400&v=beta&t=aRCGyOK0Y-B3eFRVY0Z9Cbju4ZUYkAOhGgUnTFEnSjI",
  alt: "A view of Pat Brown's moovie application homepage",
  dark: true,
  primary: true,
  darkText: false,
  btnTo: "projects",
};
