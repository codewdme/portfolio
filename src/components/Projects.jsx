// import { useContext } from "react";
import ProjectsCard from "./ProjectsCard";
// import portfolioContext from "../context/notes/portfolioContext";

export default function Projects() {
  // const propData = useContext(portfolioContext);

  // const [state, setState] = useState([
  //   {
  //     projectName: projectName,
  //     description: description,
  //     tags: tags,
  //     imageUrl: imageUrl,
  //     hostingUrl: hostingUrl,
  //     githubRepoUrl: githubRepoUrl,
  //     year: year,
  //   },
  // ]);

  // async function fetchprojectinfo() {
  //   const host = "`http://localhost:5000"; // set your backend server url

  //   let url = `${host}/portfolio/fetchprojectinfo/`;

  //   const response = await fetch(url, {
  //     method: "GET",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   setState(json);
  // }

  // rendering request of projects.

  const Projects = [
    {
      projectName: "BUSINESS WEBSITE",
      description:
        "My business website, crafted using Next.js, Framer Motion, and Tailwind CSS, features a seamless user experience with stunning animations and a modern design. However, it's not just about looks; my website is powered by a fully functional backend system, ensuring that my users have access to up-to-date information and services.",
      imageUrl: "https://i.ibb.co/zFrS3Xf/screely-1711635548388.png",
      url: "https://digital-fry-website.vercel.app/",
      githubRepoUrl: "https://github.com/codewdme/digital-fry-website",
      tags: "NextJS -FramerMotion - TailwindCSS - Express - NodeJS - MongoDB - Vercel",
    },
    {
      projectName: "JU NEXUS",
      description:
        "JU Nexus is a comprehensive platform catering to the needs of JU students, offering seamless access to a repository of previous year question papers, notes, assignments, syllabus, and more.",
      imageUrl: "https://i.ibb.co/QFwXYYs/screely-1711635431511.png",
      url: "https://ju-nexus.web.app/",
      githubRepoUrl: "https://github.com/codewdme/JU-Nexus.git",
      tags: "ReactJS - TailwindCSS - Express - NodeJS - MongoDB - Firebase",
    },
    {
      projectName: "NEWS MONKEY",
      description:
        "Curated news at your fingertips. My website fetches real-time updates from APIs, keeping you informed with the latest stories.",
      imageUrl: "https://i.ibb.co/544tMNb/news-monkey.png",
      hostingUrl: "https://news-monkey-reactbased.web.app/",
      githubRepoUrl: "https://github.com/codewdme/news-monkey.git",
      tags: "ReactJS - JavaScript - API - Firebase",
      year: 2023,
    },
    {
      projectName: "LEAVE CALCULATOR",
      description:
        "A React-Website to calculate attendance, leaves available and much more.",
      imageUrl: "https://i.ibb.co/5sNPGvt/attendance-calculator.png",
      url: "https://codewdme.github.io/attendance-leave-calculator/",
      githubRepoUrl:
        "https://github.com/codewdme/attendance-leave-calculator.git",
      tags: "ReactJS - TailwindCSS",
    },

    {
      projectName: "YT AUDIO DOWNLOADER",
      description:
        "Download Audio files of youtube Videos at Faster Speeds and with No limits",
      imageUrl: "https://i.ibb.co/1KgFWc0/youtube-mp3-downloader.png",
      url: "https://codewdme.github.io/yt-mp3-downloader/",
      githubRepoUrl: "https://github.com/codewdme/yt-mp3-downloader.git",
      tags: "API - ReactJS - TailwindCSS",
    },
    {
      projectName: "NEWSLETTER SIGNUP PAGE",
      description:
        "Responsive sign up page involving newsletter sign up process.",
      imageUrl: "https://i.ibb.co/1Lcpgy3/newsletter-signup-page.png",
      url: "https://codewdme.github.io/newsletter-sign-up-with-success-message-main/",
      githubRepoUrl:
        "https://github.com/codewdme/newsletter-sign-up-with-success-message-main.git",
      tags: "HTML5 - CSS - JS",
    },
    {
      projectName: "LANDING PAGE",
      description: "Hubble style responsive landing page FrontEnd",
      imageUrl: "https://i.ibb.co/nRCYXnk/landing-page.png",
      url: "https://codewdme.github.io/Hubble-landing-Page-FrontEnd/",
      githubRepoUrl:
        "https://github.com/codewdme/Hubble-landing-Page-FrontEnd.git",
      tags: "HTML5 - CSS",
    },
  ];
  // if (Projects.length === 0) {
  //   propData.fetchProjectInfo();
  // }
  return (
    <section id="projects" className="Projects pt-16 md:pt-0">
      <div className="lg:p-[9.6rem] max-w-6xl p-12 ">
        <div className="section-heading flex gap-6 items-center">
          <div className="header-line"></div>
          <div className="heading">
            <span>Projects</span>
            <span className="text-neon-green ">.</span>
          </div>
        </div>

        <div className="section-content">
          <div className="grid  sm:grid-cols-1 md:grid-cols-2 w-full gap-8">
            {/* {propData.projects.map((element) => { */}
            {Projects.map((element) => {
              return (
                <div key={element.projectName}>
                  <ProjectsCard element={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
