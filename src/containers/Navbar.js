import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-scroll'

class Navbar extends Component{
  render(){
    return(
      <div className="navbarcontainer" >
        <div id={this.props.nightmode?null:"light"} className={this.props.open?"navbar":"navbar active"}>
          <ul className="items" onClick={this.props.closeHandler}>
            <li><Link activeClass="active" spy={true} offset={0} to="home" smooth={true} duration={0}><b onClick={this.props.closeHandler}>Home</b></Link></li>
            <li><Link activeClass="active" spy={true} offset={0} to="about" smooth={true} duration={0}><b onClick={this.props.closeHandler}>About</b></Link></li>
            <li><Link activeClass="active" spy={true} offset={0} to="skills" smooth={true} duration={0}><b onClick={this.props.closeHandler}>Skills</b></Link></li>
            <li><Link activeClass="active" spy={true} offset={0} to="projects" smooth={true} duration={0}><b onClick={this.props.closeHandler}>Projects</b></Link></li>
            <li><Link activeClass="active" spy={true} offset={0} to="blogs" smooth={true} duration={0}><b onClick={this.props.closeHandler}>Blogs</b></Link></li>
            <li><Link activeClass="active" spy={true} offset={0} to="contact" smooth={true} duration={0}><b onClick={this.props.closeHandler}>Contact</b></Link></li>
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

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default connect(msp)(Navbar)
