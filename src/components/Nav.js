import React from 'react';
import '../css/Nav.css';

function Nav() {
    return (
        <nav className="NavBar">
            <h1> <a href=""> Alexander De Los Santos </a> </h1>
            <div className="NavLinks">
            <h1> <a href=""> Experience </a> </h1>
            <h1> <a href=""> Projects </a> </h1>
            <h1> <a href=""> Skills </a> </h1>
            <h1> <a href=""> Contact </a> </h1>
            </div>
        </nav>
    );
}

export default Nav;
