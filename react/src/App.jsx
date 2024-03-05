import { useState } from 'react'
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import './App.css'

function App() {

  // state stuff here
  const [count, setCount] = useState(0)

  // need blog 

  // need threejs coooool stuff

  // need better landing page

  // routing below

/*
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  )
  */
  return (
  <About /> 
  )

}

export default App
