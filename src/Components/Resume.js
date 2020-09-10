import React from "react";

const Resume = (props) => {
  const renderEducation = () => {
    return props.data?.education?.map((edu) => {
      return (
        <div key={edu.school}>
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree} <span>&bull;</span>
            <em className="date">{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      );
    });
  };

  const renderWork = () => {
    return props.data?.work?.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
  };

  const renderSkills = () => {
    return props.data?.skills?.map((sklls) => {
      var className = "bar-expand " + sklls.name.toLowerCase();
      return (
        <li key={sklls.name}>
          <span style={{ width: sklls.level }} className={className}></span>
          <em>{sklls.name}</em>
        </li>
      );
    });
  };

  console.log(JSON.stringify(props.data));

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{renderEducation()}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{renderWork()}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{props.data?.skillmessage}</p>

          <div className="bars">
            <ul className="skills">{renderSkills()}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
