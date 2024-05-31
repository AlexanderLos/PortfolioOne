import Typewriter from 'typewriter-effect';
import Pfp from '../css/Pfp.jpeg';
import '../css/About.css';

function About() {
  return (
    <div className="container">
      <img src={Pfp} alt="Profile Picture" className="profilePic"/>
      <div className="text">
        <h1>Hey! My name's Alex. <br/>
          <Typewriter
            options={{
              strings: ['Team-Player.', 'Software Engineer.', 'Full-Stack Developer.', 'Data Scientist.', 'Economist.'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p>Originally from Ponce, Puerto Rico | Based in Miami, Florida</p>
        <p>Full Stack Developer with a strong foundation in economics from Florida International University...</p>
        <div className="social-links">
            <a href="https://github.com/AlexanderLos" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/alexander-de-los-santos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default About;
