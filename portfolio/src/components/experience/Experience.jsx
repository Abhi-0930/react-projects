import React from "react";
import "./Experience.css";
import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have ?</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">

      {/* Frontend */}
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        
        {/* Cyber Security */}

        <div className="experience_cybersecurity">
          <h3>Cyber Security</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Penetartion Testing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Kali Linux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Network Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Cyber Threats Offensive</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Cyber Threats Defensive</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Web Application Penetration Testing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Web Applicaion Security</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Graphic Design and Media */}
        <div className="experience_media">
          <h3>Graphic Design and Media</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Graphic Designing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Video Editing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Photography</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Photo Editing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Web Designing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Social Media Marketing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className='experience_details-icon' />
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
