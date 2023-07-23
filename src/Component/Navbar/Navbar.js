import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../images/logo.svg'
import Search from './Search/Search';





const Navbar = () => {

  const [language, setLanguage] = useState('USD'); // Uz default til

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };


  return (
    <div className='navbar'>
      <div className='navbar_wel'>
        <h2>Welcome to our online shop</h2>
        <div className='language'>
            <select value={language} onChange={handleLanguageChange}>
              <option value="uz">O'zbekcha (So'm)</option>
              <option value="ru">Русский (рублей)</option>
              <option value="en">English (USD)</option>
            </select>
            {/* <span>Til: {language}</span> */}        
        </div>
        <div className='buttons'>
          <p>|</p>
          <button>Login</button>
          <p>or</p>
          <button> Sign up</button>
        </div>
        
      </div>

      <div className='navbar_battom'>
        <img src={logo} alt='log' />
        <h1>Furniking</h1>
        <p><Search /></p>
      </div>
    </div>
  )
}

export default Navbar