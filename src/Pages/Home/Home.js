import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Home.scss'
import Header from '../../Component/Header/Header'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
    </div>
  )
}

export default Home