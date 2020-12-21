import './App.css';
import React, {Component} from 'react'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Navbar from './containers/Navbar'


class App extends Component{
  state={
    open: true,
  }

  clickHandler = () =>{
    this.setState({open:!this.state.open})
  }

  closeHandler = () =>{
    this.setState({open:true})
  }

  render(){
    return (
      <div className="App">
        <Home closeHandler={this.closeHandler}/>
        <Navbar open={this.state.open} clickHandler={this.clickHandler} closeHandler={this.closeHandler}/>
        <About open={this.state.open} />
        <Projects open={this.state.open}/>
        <Contact open={this.state.open}/>
      </div>
    )
  }
}

export default App;
