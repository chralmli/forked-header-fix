import React from 'react';
import projects from './projects.module.css';

const Project = ({ title, imageUrl, description, technologies, githubLink, demoLink }) => (
  <div className={projects.projectWrapper}>
    <h2 className={projects.title}>{title}</h2>
    <img src={imageUrl} alt={title} className={projects.projectImage} />
    <p className={projects.description}>{description}</p>
    <p className={projects.technologies}>Technologies: {technologies}</p>
    <div className={projects.linkWrapper}>
      <a href={githubLink} className={projects.link}>GitHub Link</a>
      <a href={demoLink} className={projects.link}>Live Demo Link</a>
    </div>
  </div>
);

const ProjectSection = ({ sectionTitle, projects }) => (
  <div>
    <h1 className={projects.sectionTitle}>{sectionTitle}</h1>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
);

const Projects = () => {
  const reactProjects = [
    {
      title: "react_jsframework_ecom_shop",
      imageUrl: "https://i.ibb.co/PGhvSLG/react-ecom-shopping-store.png",
      description: "This project involves building a web application using React and designing it with Styled-components.",
      technologies: "HTML, JavaScript, React, Redux, Styled-Components",
      githubLink: "https://github.com/NeNorvalls/react_jsframework_ecom_shop.git",
      demoLink: "https://react-ecom-shopping-store.netlify.app/"
    },
    {
      title: "bits_and_bots_final_exam2",
      imageUrl: "https://i.ibb.co/WGK3SkW/bits-and-bots.png",
      description: "This project is created with React, Sass, Bootstrap, headless WordPress CMS, and UI design.",
      technologies: "React, Sass, Wordpress, Bootstrap, BEM",
      githubLink: "https://github.com/NeNorvalls/bits_and_bots_final_exam2.git",
      demoLink: "https://bits-and-bots.netlify.app/"
    },
    {
      title: "Car App",
      imageUrl: "https://i.ibb.co/dtRkxNt/Picture5.png",
      description: "Explore a collection of cool cars in this React-based app. Find your dream car with ease using the search functionality.",
      technologies: "React, CSS Modules",
      githubLink: "https://github.com/NeNorvalls/cars_hooks_react.git",
      demoLink: "https://car-hook-app.netlify.app/"
    },
  ];

  const htmlProjects = [
    {
      title: "Ice Creams",
      imageUrl: "https://i.ibb.co/pKhLq2K/ice-creams.jpg",
      description: "The project is composed of HTML, CSS, and JavaScript files to create an interactive ice cream shop experience.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/Ice_Creams_Shop.git",
      demoLink: "https://ice-creams-shop.netlify.app/"
    },
    {
      title: "neno_SP2_auctions",
      imageUrl: "https://i.ibb.co/QXCfdZ7/neno-sp2auctions.png",
      description: "This project is designed with knowledge and mastery in HTML, Bootstrap, Sass & Javascript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/neno_SP2_auctions.git",
      demoLink: "https://neno-sp2auctions.netlify.app/"
    },
    {
      title: "Community Science Museum",
      imageUrl: "https://i.ibb.co/ZLKDmkk/csm-screenshot.jpg",
      description: "This website's main goal is to put what we learn about HTML and CSS",
      technologies: "HTML, CSS",
      githubLink: "https://github.com/NeNorvalls/NeNorvalls_Community-Science-Museum.git",
      demoLink: "https://nenorvalls-community-science-museum.netlify.app/"
    },
    {
      title: "Contact-Us-Web-App",
      imageUrl: "https://i.ibb.co/bdh4vK7/contact-form-cover.jpg",
      description: "The 'Contact Us Web App' is built using HTML, CSS, and JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/Contact-Us-Web-App.git",
      demoLink: "https://simple-contact-form-responsive.netlify.app/"
    },
    {
      title: "To-do-List",
      imageUrl: "https://i.ibb.co/2v8LfDJ/Todo-List-Cover.jpg",
      description: "This project is a simple To-Do List application developed using HTML, CSS, and JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/To-do-list.git",
      demoLink: "https://nenorvalls-to-do-list.netlify.app/"
    },
    {
      title: "Quiz App",
      imageUrl: "https://i.ibb.co/N7pnsF5/Quiz-App-Cover.jpg",
      description: "This repository contains an interactive quiz implemented in HTML, CSS, and JavaScript. The quiz dynamically generates questions and allows users to submit their answers for evaluation.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/NeNorvalls/Quiz-App.git",
      demoLink: "https://nenorvalls-quiz-app.netlify.app/"
    },
  ];

  return (
    <div className={projects.wrapper}>
      <ProjectSection sectionTitle="React Projects" projects={reactProjects} />
      <ProjectSection sectionTitle="HTML Projects" projects={htmlProjects} />
    </div>
  );
};

export default Projects;
