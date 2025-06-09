import React, { useState, useEffect } from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/mine.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const roles = [
    'MERN Stack Developer',
    'Web Designer',
    'Graphic Designing & Media ',
    'WordPress Developer',
  ];
  const [currentText, setCurrentText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    const typeEffect = () => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        const newText = isDeleting
          ? role.substring(0, currentText.length - 1)
          : role.substring(0, currentText.length + 1);
        setCurrentText(newText);
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roles, currentRoleIndex]);

  return (
    <div>
      <header>
        <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Abhishek</h1>
          <h5 className="text-light typing">{currentText}</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <a href="#contact" className="scroll-down">Scroll down</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
