import React from 'react';
import Data from '../data/SkillsData';
import './Skills.css';
import SkillBox from '../Components/SkillBox';

export default function Skills() {
  const frontEnd = ["html", "css", "js", "react", "redux", "node"];
  const DataScience = ["python", "numpy", "pandas", "mssql"];
  const Tools = ["notion", "git", "vscode", "colab"];
  return(
    <section id="skills">
      <div className="skills-title">SKILLS</div>
      <div className="skills-kind"># Front End</div>
      <section className="front-skills">
        {frontEnd.map((x) => (
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