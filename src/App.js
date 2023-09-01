import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import aos from "aos";
import "aos/dist/aos.css";

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Contact from './Page/Contact';
import ProjectDetail from './Page/ProjectDetail';

function App() {
  useEffect(() => {
    aos.init();
  })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <section className="App">
              <div className='background-img' />
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </section>
          }
        />
        <Route path="/projects/:title" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
