import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return(
            <div>
                <nav id="navbar">
                  <ul>
                    <li><Link to ='/'>About</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                </nav>
            </div>
        );
    }
}