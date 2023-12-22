import About from './components/About';
import './css/App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Nav />
      <section id="about">
      <About />
      </section>
      <section id="experience">
      <Experience />
      </section>
      <section id="projects">
       <Projects />
      </section>
      <section id="skills">Skills Section</section>
      <section id="contact">Contact Section</section>
      <Footer />
    </div>
  );
}

export default App;
