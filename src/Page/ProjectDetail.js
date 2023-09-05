import { useLocation } from 'react-router-dom';
import ProjectsData from '../data/ProjectsData';
import './ProjectDetail.css';

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
  }

  return (
    <main
      className="project-detail-main-container"
    >
      <section className="detail-top">
        <section className="detail-top-top-section">
          <div className="detail-title">{projectData.title}</div>
          <div className="detail-period">{projectData.kind}, {projectData.period}</div>
        </section>
        <div className="detail-intro">{projectData.intro}</div>
      </section>
      <section className="detail-info-section">
        <div className="info-text">Info</div>
        <section>
          <div className="info-box">
            <div className="info-title">개발 언어</div>
            <div>{projectData.stack}</div>
          </div>
          <div className="info-box">
            <div className="info-title">배포 링크</div>
            <a
              className='deploy-link'
              href={projectData.deployLink}
              target='_blank'
              rel="noreferrer"
            >{projectData.deployLink}</a>
          </div>
          <div className="info-box">
            <div className="info-title">깃헙 링크</div>
            <a
              className="github-link"
              href={projectData.githubLink}
              target='_blank'
              rel="noreferrer"
            >{projectData.githubLink}</a>
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
      <div style={backgroundStyle} />
    </main>
  );
}