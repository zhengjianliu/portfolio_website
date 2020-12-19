import './App.css';
import React, {Component} from 'react'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Navbar from './containers/Navbar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Home/>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    )
  }
}

export default App;
