import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import AboutTest from './components/AboutTest'
import Portfolio from './components/Portfolio'
import Level from './components/Level'
import Shop from './components/Shop'

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='about-the-tests' element={<AboutTest/>} />
        <Route path='level' element={<Level/>} />
        <Route path='shop' element={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
