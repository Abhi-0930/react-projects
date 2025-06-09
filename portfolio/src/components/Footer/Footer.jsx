import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Abhishek
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/abhi._.0930?igsh=cDZ1Z24zc3NvZmYy" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <FaLinkedin />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=916302160783"
          target="_blank"
        >
          <FaWhatsapp />

        </a>

        <a
          href="https://x.com/Abhishek839917?t=xhpNpJbuWKoam2F-rBLv0A&s=09"
          target="_blank"
        >
          <FaXTwitter />

        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Abhishek. All Rights Reserved</small>
      </div>
      <a href="#top" className="jump_top"><FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
