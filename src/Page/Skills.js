import React from 'react';
import Data from '../data/SkillsData';
import './Skills.css';
import SkillBox from '../Components/SkillBox';

export default function Skills() {
  const frontEnd = ["html", "css", 'tailwind', "js", 'ts', "react", "redux", 'recoil', "node", 'next'];
  const DataScience = ["python", "numpy", "pandas", "mssql"];
  const Tools = ["notion", "git", "figma", "colab"];
  
  return(
    <section id="skills">
      <div className="skills-title">SKILLS</div>
      <div className="notice-content">아이콘 위에 마우스를 올리면 자세한 설명이 나옵니다.</div>
      <div className="skills-kind"># Front End</div>
      <section className="divid-box">
        {frontEnd.slice(0, 5).map((x) => (
          <SkillBox svg={Data[x].img} title={Data[x].title} text={Data[x].text} key={Data[x].title} />
        ))}
      </section>
      <section className="front-skills">
        {frontEnd.slice(5).map((x) => (
          <SkillBox svg={Data[x].img} title={Data[x].title} text={Data[x].text} key={Data[x].title} />
        ))}
      </section>
      <div className="skills-kind"># Data Science</div>
      <section className="front-skills">
        {DataScience.map((x) => (
          <SkillBox svg={Data[x].img} title={Data[x].title} text={Data[x].text} key={Data[x].title} />
        ))}
      </section>
      <div className="skills-kind"># Tools</div>
      <section className="front-skills">
        {Tools.map((x) => (
          <SkillBox svg={Data[x].img} title={Data[x].title} text={Data[x].text} key={Data[x].title} />
        ))}
      </section>
    </section>
  );
}