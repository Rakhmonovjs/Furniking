import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Home.scss'
import Header from '../../Component/Header/Header'
import Content from '../../Component/Content/Content'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        <Content />
    </div>
  )
}

export default Home