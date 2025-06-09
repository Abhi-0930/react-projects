import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://github.com/Abhi-0930" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin /></a>
        <a href="https://www.instagram.com/abhi._.0930?igsh=cDZ1Z24zc3NvZmYy" target='_blank'><FaInstagram/></a>
        <a href="https://x.com/Abhishek839917?t=xhpNpJbuWKoam2F-rBLv0A&s=09" target='_blank'><FaXTwitter/></a>
    </div>
  )
}

export default HeaderSocials