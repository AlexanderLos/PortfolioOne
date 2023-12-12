import React from 'react';
import '../css/Experience.css';

function Experience() {
  return (
    <div className="experience-wrapper">
      <div className="experience-section">
        <h2 className="title">Experience</h2>
        <div className="job-entry">
          <div className="time-period">
            July 2023 - Present
          </div>
          <div className="job-details">
            <h3>Software Engineer Apprentice</h3>
            <h4>General Assembly, Remote</h4>
            <ul>
              <li>Completed capstone projects using web and software development best practices.</li>
              <li>Proficient in HTML, JS, and CSS for web development.</li>
              <li>Utilized full-stack technologies including Express.js and Node.js.</li>
              <li>Managed data with SQL and NoSQL databases.</li>
              <li>Deployed applications to cloud platforms.</li>
              <li>Integrated third-party APIs and worked with JS frameworks like React.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
