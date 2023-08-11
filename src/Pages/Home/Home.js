import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Home.scss'
import Header from '../../Component/Header/Header'
import Content from '../../Component/Content/Content'
import Top from '../../Component/Trending/Top'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Header />
        <Content />
        <Top />
    </div>
  )
}

export default Home