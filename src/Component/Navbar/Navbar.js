import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../images/logo.svg'
import shop from '../../images/shop.svg'
import call from '../../images/call.svg'
import avatar from '../../images/avatar.svg'
import Search from './Search/Search';





const Navbar = () => {

  const [language, setLanguage] = useState('USD'); // Uz default til

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };


  return (
    <div className='navbar'>
      <div className='navbar_wel'>
        <h2 className='navbar_wel_title'>Welcome to our online shop</h2>
        <div className='navbar_wel_language'>
            <select className='navbar_wel_language_selects' value={language} onChange={handleLanguageChange}>
              <option value="uz">O'zbekcha (So'm)</option>
              <option value="ru">Русский (рублей)</option>
              <option value="en">English (USD)</option>
            </select>
            {/* <span>Til: {language}</span> */}        
        </div>
        <div className='navbar_wel_buttons'>
          <p>|</p>
          <button className='navbar_wel_buttons_button'>Login</button>
          <p>or</p>
          <button  className='navbar_wel_buttons_button'> Sign up</button>
        </div>
        
      </div>

      <div className='navbar_battom'>
        <img src={logo} alt='logo' className='navbar_battom_logo' />
        <h1 className='navbar_battom_title'>Furniking</h1>
        <p className='navbar_battom_search'><Search /></p>
        <div className='navbar_battom_icons'>
          <img src={shop} className='navbar_battom_icons_img' />
          <img src={call} className='navbar_battom_icons_img' />
          <img src={avatar} className='navbar_battom_icons_img' />
        </div>
      </div>
    </div>
  )
}

export default Navbar