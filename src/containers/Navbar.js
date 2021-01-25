import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-scroll'
import Bounce from 'react-reveal/Bounce';
import Modebutton from '../components/Modebutton'
import Resume from '../resume/ZHENGJIANLIU_RESUME.pdf'

class Navbar extends Component{
  componentDidMount(){
    const navbar = document.querySelector('#navbar');
    navbar.addEventListener('click',e=>{
      const target = e.target
      if(target.parentElement.id==="navbar" && target.id!=="modebutton"){
        this.props.closeHandler()
      } 
    })
  }

  displayNavbar = () =>{
    return <Bounce left cascade duration={800}>
              <ul className="items">
                <li><Link activeClass="active" spy={true} to="home" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Home</b></Link></li>
                <li><Link activeClass="active" spy={true} to="about" smooth={true} duration={700}><b onClick={this.props.closeHandler}>About</b></Link></li>
                <li><Link activeClass="active" spy={true} to="projects" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Projects</b></Link></li>
                <li><Link activeClass="active" spy={true} to="blogs" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Blogs</b></Link></li>
                <li><Link activeClass="active" spy={true} to="contact" smooth={true} duration={700}><b onClick={this.props.closeHandler}>Contact</b></Link></li>
                <li><a href={Resume} target="_blank" rel="noreferrer"><b>Resume</b></a></li>
                <li className="last-item"><span id="modebutton" onClick={this.props.nightmodeswitch}><Modebutton /></span></li>
              </ul>
            </Bounce>
  }

  render(){
    return(
      <div id="navbar" className="navbarcontainer" >
        <div
          id={this.props.nightmode?null:"light"}
          className={this.props.close?(this.props.scrollup?"navbar moveup":"navbar"):"navbar active"}>
          {this.props.close?this.displayNavbar():null}
          {!this.props.close?this.displayNavbar():null}
          <div className={this.props.close?"hamburger":"hamburger active"} onClick={this.props.clickHandler}>
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </div>
          <div className={this.props.close?"progressbar":"progressbar active"} style={{width:`${this.props.progress}%`}}></div>
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
