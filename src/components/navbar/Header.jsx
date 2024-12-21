import './Header.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/icons/contactImg.png';
// import { IoMenu } from "react-icons/io5";
import {Link} from 'react-scroll';
import { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function menuHandler() {
    // console.log("!!!...Jay Jay Ram Krushna Hari...!!!");
    fetch("https://quiz-rest-api.vercel.app/res_api/res_list/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    
    if(!isMenuOpen) {
      // console.log("!!!...Jay Vitthal Shree Vitthal...!!!");
      setIsMenuOpen(true)
    }
    else {
      // console.log("!!!...Shree Dnyanoba Mauli Tukaram...!!!");
      setIsMenuOpen(false)
    }
  }
  
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className={ isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item' onClick={menuHandler} >Home</Link>
        {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={700} className='nav-menu-item' onClick={menuHandler} >About</Link> */}
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={700} className='nav-menu-item' onClick={menuHandler} >Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={700} className='nav-menu-item' onClick={menuHandler} >Skills</Link>
      </nav>
      <button className="contactBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}
      >
        <img src={contactImg} alt="contact Image" className="contactBtn-img" />
        Contact Me
      </button>
      <div className={ isMenuOpen ? "menu-wrapper open" : "menu-wrapper"} onClick={menuHandler}>
        {/* <IoMenu className='humburger-menu-icon' /> */}
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header;