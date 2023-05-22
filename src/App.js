import React, {useEffect} from 'react';
import aos from "aos";
import "aos/dist/aos.css";

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Contact from './Page/Contact';

function App() {
  useEffect(() => {
    aos.init();
  })

  return (
    <section className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
