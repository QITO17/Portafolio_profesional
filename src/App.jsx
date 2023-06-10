import { Route, Routes } from "react-router-dom"
// import React, { useEffect, useRef, useState } from 'react';
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"
import { useState } from "react"


function App() {
  const [showAboutme, setShowAboutme] = useState(false);
  return (
    <>
      <Header setShowAboutme={setShowAboutme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<Aboutme showAboutme={showAboutme} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
