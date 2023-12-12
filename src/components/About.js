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
              strings: ['Team-Player.', 'Software Engineer.', 'Full-Stack Developer.'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p>Originally from Ponce, Puerto Rico | Based in Miami, Florida</p>
        <p>Full Stack Developer with a strong foundation in economics from Florida 
           International University. My focus lies in developing robust and 
           innovative full-stack applications, blending technical abilities with analytical insight.</p>
      </div>
    </div>
  );
}

export default About;
