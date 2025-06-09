import React from 'react'
import './Services.css'
import { IoMdCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
        <article className="service">
          <div className="service_head">
            <h3>Graphic Designing & Media</h3>
          </div>

          <ul className="service_list">
            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Creating visually appealing designs for logos, banners, posters, and branding</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Professional editing for videos, including transitions, effects, and storytelling</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Capturing high-quality images for various occasions and purposes</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Enhancing and retouching images for a polished look</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Designing responsive and user-friendly websites using tools like Figma and many more</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Crafting strategies and visuals to boost online presence and engagement</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Building and managing custom WordPress websites</p>
            </li>
          </ul>
        </article>

        {/* Web Developement */}

        <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service_list">
            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Building responsive and interactive user interfaces using HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p> Developing robust server-side applications using Node JS and Express JS</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Working with databases like MongoDB and MySQL for efficient data storage and retrieval.</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Designing and building complete web applications from front-end to back-end</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p> Implementing secure practices to protect applications from vulnerabilities</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Seamlessly integrating third-party APIs to enhance web application functionality</p>
            </li>
          </ul>
        </article>

        {/* Web Desigining */}

        <article className="service">
          <div className="service_head">
            <h3>Web Designing</h3>
          </div>

          <ul className="service_list">
            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Crafting layouts that adapt seamlessly to all screen sizes and devices</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Prioritizing user-friendly interfaces and intuitive navigation for enhanced user experience</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Creating detailed blueprints and prototypes to visualize the website structure</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Implementing the latest design trends to ensure a fresh and appealing look</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p> Adding animations and transitions to make websites engaging and dynamic</p>
            </li>

            <li>
            <IoMdCheckmark className='service_list-icon'/>
            <p>Designing and collaborating effectively using Figma for professional web projects</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services