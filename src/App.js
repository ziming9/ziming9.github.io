import React, { Component } from 'react';
import NavBar from './components/navbar'
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper-container">
        <NavBar></NavBar>
        <Main></Main>
      </div>
      
    );
  }
}

export default App;
