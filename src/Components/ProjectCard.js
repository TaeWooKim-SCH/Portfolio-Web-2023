import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({projectInfo}) {
  return (
    <Link
      to={`projects/${encodeURIComponent(projectInfo.title)}`}
      style={{textDecoration: 'none'}}
    >
      <main
        className='project-card-container'
        data-aos="fade-up"
      data-aos-duration="500"
      >
        <section className="project-card-left-section">
          <section className="project-card-left-top-section">
            <div className="project-title">{projectInfo.title}</div>
            <div className="project-period">{projectInfo.kind}, {projectInfo.period}</div>
          </section>
          <section className='project-card-tag-box'>
            {projectInfo.tags.map((tag) => <div className="project-card-tag" key={tag}># {tag}</div>)}
          </section>
          <div className="project-card-intro">{projectInfo.intro}</div>
        </section>
        <img className="project-img" alt="프로젝트 이미지" src={projectInfo.imgUrl}></img>
      </main>
    </Link>
  );
}