import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Resume from './resume'
import Contact from './contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). 
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
