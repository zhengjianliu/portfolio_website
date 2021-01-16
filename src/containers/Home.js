import React, {Component} from 'react'
import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.svg'
import Medium from '../images/medium.svg'
import Email from '../images/email.svg'
import Arrow from '../images/arrow1.png'
import Typewriter from '../components/Typewriter'
import {connect} from 'react-redux'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce';
import ICON from '../components/ICON'
class Home extends Component{
  render(){
    return(
      <div id="home" className="fullpage">
        <div className={this.props.nightmode?"backgroundimage":"light backgroundimage"}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <div className={this.props.nightmode? "intro": "intro light"}>
          <Fade delay={200} bottom cascade>
            <div><h1>👋 Hey there!</h1></div>
          </Fade>
          <Fade delay={400} bottom >
            <div><h1>My name is</h1></div>
          </Fade>
          <Fade delay={600} bottom >
            <div><h1 style={{color: "#009ed9"}}>Zhengjian Liu</h1></div>
          </Fade>
            <h2>I'm <Typewriter titles={['a Full Stack Developer', 'a Problem Solver 🤔','Ready To Work With You']}/></h2>
          <Fade delay={1300} bottom>
            <Link to="about" smooth={true} duration={500} onClick={this.props.closeHandler}><img className="arrow" src={Arrow} alt="scroll down"/></Link>
          </Fade>
        </div>
        <div className="infobox">
          <Bounce bottom cascade duration={1300}>
            <ul>
              <li><a href="mailto:comezheng@gmail.com"><ICON src={Email} width="40" fill="rgb(200, 23, 128)"/></a></li>
              <li><a href="https://medium.com/@comezheng" rel="noreferrer" target="_blank"><ICON src={Medium} width="40" fill="rgb(200, 23, 128)"/></a></li>
              <li><a href="https://github.com/zhengjianliu" rel="noreferrer" target="_blank"><ICON src={Github} width="40" fill="rgb(200, 23, 128)"/></a></li>
              <li><a href="https://www.linkedin.com/in/zhengjian-jay-liu-33776553/" rel="noreferrer" target="_blank"><ICON src={Linkedin} width="40" fill="rgb(200, 23, 128)"/></a></li>
            </ul>
        </Bounce>
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
