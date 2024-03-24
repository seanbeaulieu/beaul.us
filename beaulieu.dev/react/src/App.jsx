import { useState, useEffect } from 'react'
import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About"
import Blogposts from "./components/Blogposts"
import SingleBlogpost from './components/SingleBlogpost'
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"


function App() {

  // state stuff here

  useEffect(() => {
    // Apply style to body, this is to get rid of the border around the app
    document.body.style.margin = '0',
    document.body.style.padding = '0',
    document.body.style.boxSizing = 'border-box',
    document.body.style.backgroundColor = '#F8F9F1', 
    document.body.style.color = '#333', 
    document.body.style.fontFamily = 'DM Sans, sans-serif'
  }, [])

  // need blog 

  // need threejs coooool stuff

  // need better landing page

  // routing below
  /*
  const appStyle = {
    backgroundColor: '#F8F9F1',
    // minHeight: '100vh', 
    color: '#333', 
    fontFamily: 'DM Sans, sans-serif',
  } */
  
  return (
    <Router>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blogposts" element={<Blogposts />} />
        <Route path="blogposts/:id" element={<SingleBlogpost />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
   
    </div>
  </Router>

  )

}

export default App
