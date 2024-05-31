import '../css/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-flex-container">
        <div className="skill-section">
          <h3>Web Development & Programming Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Ruby on Rails</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>Django</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-section">
          <h3>Database Management</h3>
          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose ODM</li>
            </ul>
          </div>

          <div className="skill-section">
            <h3>Cloud Services</h3>
            <ul>
            <li>AWS - Certified Developer Associate</li>
            </ul>
          </div>

          <div className="skill-section">
            <h3>Additional Skills</h3>
            <ul>
            <li>Cloud Deployment Strategies</li>
            <li>Debugging</li>
            <li>Pandas</li>
            <li>Data Analysis</li>
            <li>Data Cleaning</li>
            <li>Quantitative Economics</li>
            <li>Github</li>
            <li>Market Research</li>
            <li>Frameworks</li>
            </ul>
          </div>
          
      </div>
    </div>
  );
}

export default Skills;
