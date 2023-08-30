import React, { useState } from "react";
import './SkillBox.css';

export default function AboutSkill({svg, title, text}) {
  const [isOver, setIsOver] = useState(false);

  const onMouseOverHandler = () => {
    setIsOver((prev) => !prev);
  }

  return (
    <main className="skill-main">
      <section
        className="skill-box"
        data-aos="fade-up"
        data-aos-duration="800"
        onMouseEnter={onMouseOverHandler}
        onMouseLeave={onMouseOverHandler}
      >
        <img className="skill-img" src={svg} alt="html" style={{width:'70px'}}></img>
        {isOver && (
          <section className="skill-box-right">
            <div className="skill-title">{title}</div>
            <div className="skill-content">{text}</div>
          </section>
        )}
      </section>
    </main>
  );
}