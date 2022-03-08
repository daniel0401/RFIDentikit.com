import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineMail } from "react-icons/ai";
import logo from '../../assets/RFID-logo.svg';
import logodark from '../../assets/RFID-Dark-logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='javascript:void()'>Home</a></p>
  <p><a href='javascript:void()'>Function</a></p>
  <p><a href='javascript:void()'>Application</a></p>
  <p><a href='javascript:void()'>Technology</a></p>
  <p><a href='javascript:void()'>Clients</a></p>
  <p><a href='javascript:void()'>News</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='rfid__navbar'>
      <div className='rfid__navbar-links'>
        <div className='rfid__navbar-links_logo'>
          <picture>
              <source media="(prefers-color-scheme: dark)" srcSet={logodark} />
              <img src={logo} alt="RFID Logo" />
        </picture>
        </div>
        <div className='rfid__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='rfid__navbar-sign'>
        <p>AllowMe</p>
        <a href='mailto:info@rfidentikit.com'><button type='button'><AiOutlineMail /> Contact</button></a>
      </div>
      <div className='rfid__navbar-menu'>
      {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className='rfid__navbar-menu_container scale-up-center'>
          <div className='rfid__navbar-menu_container-links'>
            <Menu />
            <div className='rfid__navbar-menu_container-links-sign'>
              <p>AllowMe</p>
              <a href='mailto:info@rfidentikit.com'><button type='button'><AiOutlineMail /> Contact</button></a>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar