import '../css/Nav.css';

function Nav() {
    return (
        <nav className="NavBar">
            <div className="NameTitle"><a href="#about">&lt;Alexander De Los Santos /&gt;</a></div>
            <div className="NavLinks">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
                <a href="/resume.pdf" download="Alexander_De_Los_Santos_Resume">Resume</a> 
            </div>
        </nav>
    );
}

export default Nav;
