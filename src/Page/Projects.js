import React, {useState} from 'react';
import './Projects.css'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import ProjectCard from '../Components/ProjectCard';
import ProjectsData from '../data/ProjectsData';

export default function Projects() {
  const [page, setPage] = useState(0);

  const arrowClickHandler = (type) => {
    if (type === "left") {
      if (page === 0) return;
      setPage((prev) => prev - 1);
    }
    else {
      if (page === ProjectsData.length - 1) return;
      setPage((prev) => prev + 1);
    }
  }

  return(
    <section id="projects">
      <div className='projects-title'>PROJECTS</div>
      <main className="projects-main">
        <IoIosArrowBack className="arrow arrow-left" size="100" fill='#6D6D6D' onClick={() => arrowClickHandler('left')} />
        {ProjectsData.map((project, index) => (
          <div className={`${!(page === index) && 'hidden'}`} key={index}>
            <ProjectCard
              url={project.imgUrl}
              title={project.title}
              kind={project.kind}
              comment={project.comment}
              tags={project.tags}
              key={project.title}
            />
          </div>
        ))}
        <IoIosArrowForward className="arrow arrow-right" size="100" fill='#6D6D6D' onClick={() => arrowClickHandler('right')} />
      </main>
    </section>
  );
}