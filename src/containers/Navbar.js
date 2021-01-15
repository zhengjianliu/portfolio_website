import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-scroll'
import Bounce from 'react-reveal/Bounce';

class Navbar extends Component{
  render(){
    return(
      <div className="navbarcontainer" >
        <div id={this.props.nightmode?null:"light"} className={this.props.close?(this.props.scrollup?"navbar moveup":"navbar"):"navbar active"}>
          <Bounce left cascade duration={800}>
          <ul className="items" onClick={this.props.closeHandler}>
            <li><Link activeClass="active" spy={true} to="home" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Home</b></Link></li>
            <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700}><b onClick={this.props.closeHandler}>About</b></Link></li>
            <li><Link activeClass="active" spy={true} to="projects" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Projects</b></Link></li>
            <li><Link activeClass="active" spy={true} to="blogs" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Blogs</b></Link></li>
            <li><Link activeClass="active" spy={true} to="contact" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Contact</b></Link></li>
            <li><a href="https://docs.google.com/document/d/1yjKZIodyngLcENDMbB2YUz-SPTznlJJFHwof2R4XVjc/edit?usp=sharing" target="_blank" rel="noreferrer"><b>Resume</b></a></li>
          </ul>
          </Bounce>
          <div className={this.props.close?"hamburger":"hamburger active"} onClick={this.props.clickHandler}>
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
