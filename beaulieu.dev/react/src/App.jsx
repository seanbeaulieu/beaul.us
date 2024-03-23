import { useState } from 'react'
import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About"
import Blogposts from "./components/Blogposts"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

import './App.css'

function App() {

  // state stuff here

  // need blog 

  // need threejs coooool stuff

  // need better landing page

  // routing below

  return (
  <Router>
    <div>
      <About />
      <Blogposts />
      
    </div>
  </Router>
  )

}

export default App
