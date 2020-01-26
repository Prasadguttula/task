import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/details">Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app">Applications</Link>
                    </li>
                </ul>
                </nav>
          
        )
    }
}

export default Navbar
