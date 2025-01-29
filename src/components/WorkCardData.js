import studentApp from "../images/studentApp.png";
import studentApp2 from "../images/studentApp2.png";
import studentApp3 from "../images/studentApp3.png";

//local api that fetchs data to the project card
const ProjectCardData = [
  {
    imgSrc: studentApp,
    title: "Student Application",
    text: "This is a student application",
    view: "url to be added",
    source: "https://github.com/lyspaul/portfolio-app.git",
  },
  {
    imgSrc: studentApp2,
    title: "AI Email Reply Application",
    text: "This is an application that generates AI email responses for users",
    view: "url to be added",
    source: "https://github.com/lyspaul/EmailAIWriter.git",
  },
  {
    imgSrc: studentApp3,
    title: "My Personal Porfolio",
    text: "This is a full stack personal portfolio website",
    view: "url to be added",
    source: "https://github.com/lyspaul/portfolio-app.git",
  },
];

export default ProjectCardData;
