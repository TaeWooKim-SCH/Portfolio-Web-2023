import React from 'react';
import video from '../img/background-video.mp4';

import './Home.css';

export default function Home() {
  return(
    <section id="home">
      <video autoPlay muted loop id="home-video">
        <source src = {video} type = "video/mp4"></source>
      </video>
      <div className="home-title">DEV. <span className="portfolio">P O R T F O L I O</span></div>
    </section>
  );
}