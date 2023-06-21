import React from 'react';

import './Home.css';
import backgroundVideo from '../assets/background-video.mp4';

export default function Home() {
  return(
    <section id="home">
      <video autoPlay muted loop id="home-video">
        <source src = {backgroundVideo} type = "video/mp4"></source>
      </video>
      <div className="home-title">D E V . <span className="portfolio">P O R T F O L I O</span></div>
    </section>
  );
}