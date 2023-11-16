import React from "react";
import { Link } from "react-router-dom";
import home from "./home.module.css";
import profilePhoto from "../../images/nenorvalls.jpg";
import SkillsContainer from "../SkillCard/SkillCard";

const Home = () => {
  return (
    <div className={home.container}>
      <div className={home.sidebar}>
        <img className={home.profileImage} src={profilePhoto} alt="Profile" />
        <p className={home.introParagraph}>
          Hello, I'm Nenita Norvalls, a recent graduate of Noroff School of
          Technology and Digital Media's Front-End Development course. My focus
          is on practical skills that matter in real-world web development.
        </p>
        <div className={home.contactInfoList}>
            <p className={home.contactInfo}>
            <strong>Mobile number:</strong> +4791129757
            </p>
            <p className={home.contactInfo}>
            <strong>Github:</strong> https://github.com/NeNorvalls
            </p>
            <p className={home.contactInfo}>
            <strong>Email:</strong> nenorvalls@gmail.com
            </p>
            <p className={home.contactInfo}>
            <strong>Location:</strong> Bergen, Norway
            </p>
        </div>
      </div>

      <div className={home.content}>
        <h1 className={home.welcomeHeader}>
          Welcome to Nenorvalls: Innovating Web Experiences
        </h1>
        <p className={home.skillsParagraph}>
          Throughout my Front-End Development journey at Noroff School of
          Technology and Digital Media, I've gained proficiency in various
          technologies and tools. Here are some of the key skills I've acquired:
        </p> 
        <SkillsContainer />

        <p className={home.contributionParagraph}>
          Despite being a recent graduate, I bring a solid educational
          foundation and a dedication to staying current with industry trends. I
          am eager to contribute my skills and a fresh perspective to a team
          that values innovation and excellence.
        </p>
        <p className={home.readyParagraph}>
          Ready to see what I've been working on?
        </p>
        <Link to="projects" className={home.exploreButton}>
          Explore My Projects
        </Link>

        
       
      </div>
    </div>
  );
};

export default Home;
