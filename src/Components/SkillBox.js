import React from "react";
import './SkillBox.css';

export default function AboutSkill({svg, title, text}) {
  return (
    <section className="skill-box" data-aos = "fade-up" data-aos-duration = "800">
      <img src={svg} alt="html" style={{width:'70px'}}></img>
      <section className="skill-box-right">
        <div className="skill-title">{title}</div>
        <div className="skill-content">{text}</div>
      </section>
    </section>
  );
}