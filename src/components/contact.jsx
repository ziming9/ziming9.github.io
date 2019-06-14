import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div id="wrapper">
                <p class="contact">
                    <h1>Ziming Ye</h1>
                    <p>
                        <h5><span class="notbold">Email: ryanye3gmail.com</span></h5>
                        <h5><span class="notbold">Phone: (510) 612-5680</span></h5>
                    </p>
                </p>

                <footer>
                  <p>Find me on</p>
                  <a href="https://www.linkedin.com/login?trk=guest_homepage-basic_nav-header-signin">
                    <img src="https://www.filepicker.io/api/file/GBwbi7k5TAeLUOuGLk30" alt="linkedin favicon" height={30} width={30} /></a>
                  <a href="https://github.com/ziming9">
                    <img src="https://www.filepicker.io/api/file/Uek3YL8SmiMd7EA92NSA" alt="github favicon" height={30} width={30} /></a>
                </footer>
            </div>
            
        );
    }
};