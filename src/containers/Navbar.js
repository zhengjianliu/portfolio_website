import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

class Navbar extends Component{
  state={
    open:true,
  }
  clickHandler = () =>{
    this.setState({open:!this.state.open})
  }
  render(){
    return(
      <div className="navbarcontainer" >
        <div className={this.state.open?"navbar":"navbar active"}>
          <ul className="items" onClick={this.clickHandler}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="info">
            <a><img src={Linkedin}/></a>
            <a><img src={Github}/></a>
          </div>
          <div className={this.state.open?"hamburger":"hamburger active"} onClick={this.clickHandler}>
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
