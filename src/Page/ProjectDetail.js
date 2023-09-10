import { useLocation } from 'react-router-dom';
import ProjectsData from '../data/ProjectsData';
import { FaShareSquare, FaGithub } from 'react-icons/fa';
import './ProjectDetail.css';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const pageTitle = decodeURIComponent(useLocation().pathname).substring(10);
  const projectData = ProjectsData.filter((project) => project.title === pageTitle)[0];
  const backgroundStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    background: `url(${projectData.imgUrl}) no-repeat`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    filter: 'blur(5px) opacity(5%)',
    color: 'white',
    zIndex: '999'
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className={`project-detail-main-container`}
    >
      <section className="detail-top">
        <section className="detail-top-top-section">
          <div className="detail-title">{projectData.title}</div>
          <div className="detail-period">{projectData.kind}, {projectData.period}</div>
        </section>
        <div className="detail-intro">{projectData.intro}</div>
        <section className="link-btn-section">
          {projectData.deployLink && <a
            className="link-btn deploy"
            href={projectData.deployLink}
            target="_blank"rel="noreferrer"
          >
            <FaShareSquare fill="black" size="25" />
            <div className="link-btn-text">사이트 방문하기</div>
          </a>}
          <a
            className="link-btn github"
            href={projectData.githubLink}
            target="_blank"rel="noreferrer"
          >
            <FaGithub fill="black" size="25" />
            <div className="link-btn-text">Github</div>
          </a>
        </section>
      </section>
      <section className="detail-info-section">
        <div className="info-text">Info</div>
        <section>
          <div className="info-box">
            <div className="info-title">개발 언어</div>
            <div>{projectData.stack}</div>
          </div>
          <div className="info-box">
            <div className="info-title">담당 업무</div>
            <div>
              {projectData.feature.map((feat, idx) => (
                <div className="feat-text" key={idx}>✔ {feat}</div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="detail-view-section">
        <div className="info-text">View</div>
        <section className='detail-view-box'>
          {projectData.imgs.map((img, idx) => (
            <img className="detail-project-img" src={img} alt='이미지' key={idx} />
          ))}
        </section>
      </section>
      <div style={backgroundStyle} />
    </main>
  );
}