import '../css/Projects.css';
import image from '../css/project1.png';

const projectData = [
    {
        id: 1,
        title: "ChipKrypt",
        description: "A decentralized crypto price tracker and news application for crypto enthusiasts!",
        image: image,
        link: "https://chipkrypt-frontend.vercel.app"
    },
    
];

function Projects() {
    return (
        <div className="projects-wrapper">
            <h2 className="title">Projects</h2>
            <section className="projects-section">
                {projectData.map(project => (
                    <article key={project.id} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} className="project-image"/>
                        <a href={project.link} className="visit-button" target="_blank" rel="noopener noreferrer">Visit</a>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Projects;
