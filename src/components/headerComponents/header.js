import React from 'react';

import {
    Link
} from 'react-router-dom';



function Header() {
    return ( 
    <header>
        <div className="logo">
            SAIF<span id="logod">Partners</span>
        </div>
        <nav>
        <ul>
            <li className="first">
            <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/Products">PORTFOLIO</Link>
            </li>
            <li>
            <Link to="/Contacts">TEAM</Link>
            </li>
            <li className="last">
            <Link to="/Contacts">ABOUT</Link>
            </li>
        </ul>
        </nav>
    </header>
    );
}

export default Header;