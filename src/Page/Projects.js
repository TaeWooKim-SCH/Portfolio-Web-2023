import React from 'react';
import './Projects.css';
import ProjectCard from '../Components/ProjectCard';
import ProjectsData from '../data/ProjectsData';

export default function Projects() {
  return(
    <main id="projects">
      <section className='projects-title'>PROJECTS</section>
      <section className="projects-bottom">
        <section className="projects-main">
          {ProjectsData.map((project, idx) => (
            <ProjectCard projectInfo={project} key={idx} />
          ))}
        </section>
      </section>
    </main>
  );
}
