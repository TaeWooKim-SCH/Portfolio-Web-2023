import React from 'react';
import './Projects.css';
import ProjectCard from '../Components/ProjectCard';
import ProjectsData from '../data/ProjectsData';

export default function Projects() {
  return(
    <main id="projects">
      <section className='projects-title'>PROJECTS</section>
      <div className="project-notice-content">카드를 클릭하면 자세한 설명을 볼 수 있습니다.</div>
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
