import React, { useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {

  const [sticky,setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]) 
  
  const[mobileMenu,setmobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} className='logo' />
        <ul className={mobileMenu?'show-mobile-menu':'hide-mobile-menu'}>
            <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='programs' offset={-260} smooth={true} duration={500}>Program</Link></li>
            <li><Link to='about' offset={-260} smooth={true} duration={500}>About Us</Link></li>
            <li><Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' offset={-260} smooth={true} duration={500}>Contact Us</Link></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar