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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

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
