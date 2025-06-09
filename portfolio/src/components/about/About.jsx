import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdFolderSpecial } from "react-icons/md";

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <MdFolderSpecial className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
        </div>
        <div className="about_content">
        <p>I am Abhishek, a B.Tech undergraduate skilled in MERN stack development, graphic designing, cybersecurity, <br /> web application security, and media editing, with experience in tools like Tailwind CSS, React, Node.js, MongoDB, Kali Linux, and WordPress</p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </section>
    </div>
  );
};

export default About;
