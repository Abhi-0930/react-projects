import React, { useState } from 'react';
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#" title='Home'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about" title='About'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <CiUser />
      </a>
      <a
        href="#experience" title='Experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <IoBookOutline />
      </a>
      <a
        href="#services" title='Services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdMedicalServices />
      </a>
      <a 
        href="#portfolio" title='Portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <IoMdContact />
      </a>
      <a
        href="#contact" title='Contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiMessage2Line />
      </a>
    </nav>
  );
};

export default Navbar;
