import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Medium from '../images/medium.png'
import Email from '../images/email.png'
import Arrow from '../images/arrow1.png'
import Typewriter from '../components/Typewriter'
import {connect} from 'react-redux'
import {Link} from 'react-scroll'

class Home extends Component{
  render(){
    return(
      <div id="home" className="fullpage">
        <div className={this.props.nightmode? "intro": "intro light"}>
          <h1>👋 Hey there!<br/>My name is <br/><span>Zhengjian Liu</span></h1>
          <h2><span>I'm <Typewriter titles={['a Full Stack Developer', 'a Problem Solver 🤔','Ready To Work With You']}/></span></h2>
          <Link to="projects" smooth={true} duration={1000} onClick={this.props.closeHandler}><img className="arrow" src={Arrow} alt="scroll down"/></Link>
        </div>
        <div className="infobox">
          <div>
            <a href="mailto:comezheng@gmail.com"><img src={Email} alt="Email"/></a>
            <a href="https://medium.com/@comezheng" rel="noreferrer" target="_blank"><img src={Medium} alt="Medium"/></a>
            <a href="https://github.com/zhengjianliu" rel="noreferrer" target="_blank"><img src={Github} alt="Github"/></a>
            <a href="https://www.Linkedin.com/in/zhengjian-liu-33776553" rel="noreferrer" target="_blank"><img src={Linkedin} alt="Linkedin"/></a>
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

export default connect(msp)(Home)
