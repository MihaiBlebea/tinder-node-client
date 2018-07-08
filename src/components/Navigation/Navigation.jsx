import React from 'react';
import { Link } from 'react-router-dom';
import { TimeLeft } from './../components';


function Navigation()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
            <a className="navbar-brand">Programatic Dating</a>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/girls">Girls</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
            </ul>

            
        </nav>
    )
}

export default Navigation;
