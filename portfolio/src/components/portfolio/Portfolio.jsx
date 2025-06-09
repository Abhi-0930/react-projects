import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: img2,
      title: "Gemini Clone",
      link: "https://github.com",
      live: "https://cool-arithmetic-178d49.netlify.app/",
    },
    {
      id: 2,
      image: img3,
      title: "SpaceX Clone",
      link: "https://github.com",
      live: "https://ephemeral-twilight-2d62b6.netlify.app/",
    },
    {
      id: 3,
      image: img6,
      title: "TODO List",
      link: "https://github.com",
      live: "https://deft-figolla-0c6c3d.netlify.app/",
    },
    {
      id: 4,
      image: img4,
      title: "Stopwatch",
      link: "https://github.com",
      live: "https://lucent-begonia-31ea3b.netlify.app/",
    },
    {
      id: 5,
      image: img5,
      title: "Tic Tac Toe",
      link: "https://github.com",
      live: "https://gorgeous-cupcake-bc7da4.netlify.app/",
    },
    {
      id: 6,
      image: img1,
      title: "Bite Buzz",
      link: "https://github.com",
      live: "https://enchanting-florentine-f48c17.netlify.app/",
    },
  ];

  return (

    
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, link, live }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a
                href={live}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
