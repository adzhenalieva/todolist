import React from 'react';
import {NavLink} from'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper purple darken-3 px1">
            <a href="/" className="brand-logo">My todo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo list</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
            </ul>
        </div>
    </nav>
);


