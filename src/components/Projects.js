import '../css/Projects.css';
import image from '../css/project1.png';
import image2 from '../css/project2.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


const projectData = [
    {
        id: 1,
        title: "ChipKrypt",
        description: "A decentralized crypto price tracker and news application for crypto enthusiasts! (Work In Progress)",
        image: image,
        link: "https://chipkrypt-frontend.vercel.app"
    },
    {
        id: 2,
        title: "Utica",
        description: 'A geo-location app for finding crypto establishments. (Work In Progress)',
        image: image2,
        link: 'https://utica-kc37ub7yr-alexanderlos-projects.vercel.app'
    }
    
];

function Projects() {
    return (
        <div className="projects-wrapper">
            <h2 className="title">Projects</h2>
            <Carousel className="projects-section">
                {projectData.map(project => (
                    <article key={project.id} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} className="project-image"/>
                        <a href={project.link} className="visit-button" target="_blank" rel="noopener noreferrer">Visit</a>
                    </article>
                ))}
            </Carousel>
        </div>
    );
}





export default Projects;
