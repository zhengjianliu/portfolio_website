import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Medium from '../images/medium.png'
import Email from '../images/email.png'
class Navbar extends Component{

  render(){
    return(
      <div className="navbarcontainer" >
        <div className={this.props.open?"navbar":"navbar active"}>
          <ul className="items" onClick={this.props.closeHandler}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className={this.props.open?"info":"info active"}>
            <a href="https://www.Linkedin.com/in/zhengjian-liu-33776553" target="_blank"><img src={Linkedin}/></a>
            <a href="https://github.com/zhengjianliu" target="_blank"><img src={Github}/></a>
            <a href="https://medium.com/@comezheng" target="_blank"><img src={Medium}/></a>
            <a href="mailto:comezheng@gmail.com"><img src={Email}/></a>
          </div>
          <div className={this.props.open?"hamburger":"hamburger active"} onClick={this.props.clickHandler}>
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
