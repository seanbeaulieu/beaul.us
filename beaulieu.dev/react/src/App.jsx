import { useState } from 'react'
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

  // need blog 

  // need threejs coooool stuff

  // need better landing page

  // routing below

  return (
    <Router>
      <Navbar />
      <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blogposts" element={<Blogposts />} />
        <Route path="blogposts/:id" element={<SingleBlogpost />} />
        {/* ... other routes ... */}
      </Routes>
   
    </div>
  </Router>

  )

}

export default App
