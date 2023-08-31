import React from "react";

export default function ProjectCard({url, title, kind, comment, tags}) {
  return (
    <main className='projects-main-mid'>
      <img className="project-img" alt="프로젝트 이미지" src={url}></img>
      <section className="project-description">
        <article className="project-description-inline">
          <div>{title}</div>
          <div>{kind}</div>
        </article>
      </section>
      {/* <div className="project-title">{title}</div>
      <div className="project-kind">{kind}</div>
      <div className="project-comment">{comment}</div>
      <div className='tag-box'>
        {tags.map((tag) => <Tag word={tag} key={tag} />)}
      </div> */}
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