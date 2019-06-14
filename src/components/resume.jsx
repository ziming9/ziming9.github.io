import React, { Component } from 'react'

const skills = ['Java', 'JavaScript', 'C', 'PostgreSQL', 'React.js', 'Vue.js', 'HTML', 'CSS',];

export default class Resume extends Component {
    render() {
      return (
        <div className="wrapper">
          <div className="row experience">
            <div className="col-xs-2">
              <h3><i>Experience</i></h3>
            </div>
            <div className="col-xs-10">
              <h5>Sterling Bank and Trust<span className="left-align notbold">July 2018 - September 2018</span></h5>
              <h6><span className="notbold">Customer Service Representative</span></h6>
              <p>
                <ul>
                  <li>Proactively acquire new clients and expand existing clients’ relationship to maximize sales opportunities</li>
                  <li>Resolve any client related issue by retaining benefits of both the client and the company</li>
                </ul>
              </p>
            </div>
          </div>

          <hr className="line"></hr>

          <div className="row skill">
            <div className="col-xs-2">
              <h3><i>Skills</i></h3>
            </div>
            <div className="col-xs-10" id="skill-content">
              <p>
                {skills.map(skill=>
                  <div className="col-xs-4">
                    {skill}
                  </div>)}
              </p>
            </div>
          </div>

          <hr className="line"></hr>

          <div className="row project">
            <div className="col-xs-2">
              <h3><i>Projects</i></h3>
            </div>
            <div className="col-xs-10">
              <h5>Said-it | <a href="http://saidit.pythonanywhere.com/"><span class="notbold"> Live</span></a> 
                  &nbsp;| <a href="http://github.com/ziming9/said-it"><span class="notbold">Github</span></a></h5>
              <p>
                Platform for sharing posts, built with Python and Vue.js. Integrates 
                two web frameworks using web2py routes.
              </p>
            </div>
          </div>

          <hr className="line"></hr>

          <div className="row education">
            <div className="col-xs-2">
              <h3><i>Education</i></h3>
            </div>
            <div className="col-xs-10">
              <h5>University of California, Santa Cruz<span class="left-align notbold">September 2017 - June 2019</span></h5>
              <h6><span class="notbold">BS, Computer Science</span></h6>
              <p>
                <ul>
                  <li>
                    coursework: Abstract Data Types, Analysis of Algorithms, Intro to Software Engineering
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };