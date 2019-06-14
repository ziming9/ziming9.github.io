import React, { Component } from 'react'

export default class About extends Component {
    render() {
      return (
        <div>
          <div id="wrapper">
            <header>
              <h1>Picture here</h1><small>Web Developer</small></header>
            <section id="about">
              <p>Hi, my name is Ziming Ye and I am a UCSC graduate with a Computer Science B.S. Degree.</p>
            </section>
            <footer>
              <p>Find me on</p>
              <a href="https://www.linkedin.com/login?trk=guest_homepage-basic_nav-header-signin">
                <img src="https://www.filepicker.io/api/file/GBwbi7k5TAeLUOuGLk30" alt="linkedin favicon" height={30} width={30} /></a>
              <a href="https://github.com/ziming9">
                <img src="https://www.filepicker.io/api/file/Uek3YL8SmiMd7EA92NSA" alt="github favicon" height={30} width={30} /></a>
            </footer>
          </div>
        </div>
      );
    }
  };