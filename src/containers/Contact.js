import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Medium from '../images/medium.png'
import Email from '../images/email.png'
import {connect} from 'react-redux'
import Arrow from '../images/arrow1.png'
import {animateScroll as scroll} from 'react-scroll'
class Contact extends Component{
  render(){
    return(

        <div id="contact" className="fullpage">
          <Fade bottom duration={1000} delay={100} cascade>
            <div className={this.props.nightmode?"contactcontainer":"contactcontainer light"}>
              <h1>Get In Touch</h1>
              <span className={this.props.nightmode?null:"light"}><hr/></span>
              <p>Please feel free to say Hi 👋! or contact me if you have any question.
                <br/>I'll try my best to get back to you! 😊</p>
              <Fade bottom duration={1000} delay={200}>
                <a href="mailto:comezheng@gmail.com">Contact me</a>
              </Fade>
            </div>
            <Fade bottom duration={1000} delay={300}>
              <div className="info">
                <a href="https://www.linkedin.com/in/zhengjian-jay-liu-33776553/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
                <a href="https://github.com/zhengjianliu" target="_blank" rel="noreferrer"><img src={Github} alt="Github"/></a>
                <a href="https://medium.com/@comezheng" target="_blank" rel="noreferrer"><img src={Medium} alt="Medium"/></a>
                <a href="mailto:comezheng@gmail.com"><img src={Email} alt="Email"/></a>
              </div>
            </Fade>
          </Fade>
            <img className="scrollup" src={Arrow} alt="scroll up" onClick={()=>scroll.scrollToTop()}/>
        </div>

    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default connect(msp)(Contact)
