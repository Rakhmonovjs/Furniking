import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Home.scss'
import Header from '../../Component/Header/Header'
import Content from '../../Component/Content/Content'
import Trending from '../../Component/Trending/Trending'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        <Content />
        <Trending />
    </div>
  )
}

export default Home