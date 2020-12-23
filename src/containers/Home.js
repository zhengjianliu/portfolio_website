import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Medium from '../images/medium.png'
import Email from '../images/email.png'
import Arrow from '../images/arrow1.png'
import Typewriter from '../components/Typewriter'

class Home extends Component{
  render(){
    var titles = ['Full Stack Developer', 'Problem Solver 🤔'];
    return(
      <div id="home" className="fullpage">
        <div className="positionbg">Full-Stack<br/>Web Developer</div>
        <div className="intro">
          <h1>👋 Hey there!<br/>My name is <br/><span>Zhengjian Liu.</span></h1>
          <h2>I'm a <span><Typewriter titles={titles}/></span></h2>
          <a href="#about" onClick={this.props.closeHandler}><img className="arrow" src={Arrow} alt="scroll down"/></a>
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

export default Home
