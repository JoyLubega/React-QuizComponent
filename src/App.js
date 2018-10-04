import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz';
import NavBars from './nav';


class App extends Component {
  render() {
    return (
      <div>
       <NavBars/>
      <Quiz/>
      </div>
      
    )
  }
}

export default App