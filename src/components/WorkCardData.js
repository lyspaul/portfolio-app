import studentApp from "../images/studentApp.png";
import emailGeneratorProject from "../images/emailGeneratorProject.png";
import portfolio from "../images/portfolio.png";

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
    imgSrc: emailGeneratorProject,
    title: "AI Email Reply Application",
    text: "This is an application that generates AI email responses for users",
    view: "url to be added",
    source: "https://github.com/lyspaul/EmailAIWriter.git",
  },
  {
    imgSrc: portfolio,
    title: "My Personal Porfolio",
    text: "This is a full stack personal portfolio website",
    view: "https://my-portfolio-lp.azurewebsites.net/",
    source: "https://github.com/lyspaul/portfolio-app.git",
  },
];

export default ProjectCardData;
