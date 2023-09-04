import React from "react";
import Tag from './Tag';

export default function ProjectCard({url, title, kind, comment, tags, period}) {
  return (
    <main className='project-card-container'>
      <section className="project-card-left-section">
        <section className="project-card-left-top-section">
          <div className="project-title">{title}</div>
          <div className="project-period">{kind}, {period}</div>
        </section>
        <section className='project-card-tag-box'>
          {tags.map((tag) => <div className="project-card-tag" key={tag}># {tag}</div>)}
        </section>
        <div className="project-card-comment">{comment}</div>
      </section>
      <img className="project-img" alt="프로젝트 이미지" src={url}></img>
    </main>
  );
}

// import React from "react";
// import Tag from "./Tag";

// export default function ProjectCard({url, title, kind, comment, tags}) {
//   return (
//     <section className='projects-main-mid'>
//       <img className="project-img" alt="프로젝트 이미지" src={url}></img>
//       <div className="project-title">{title}</div>
//       <div className="project-kind">{kind}</div>
//       <div className="project-comment">{comment}</div>
//       <div className='tag-box'>
//         {tags.map((tag) => <Tag word={tag} key={tag} />)}
//       </div>
//     </section>
//   );
// }