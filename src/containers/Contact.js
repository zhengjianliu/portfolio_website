import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Medium from '../images/medium.png'
import Email from '../images/email.png'
import {connect} from 'react-redux'

class Contact extends Component{
  render(){
    return(

        <div id="contact" className="fullpage">
          <Fade bottom>
            <div className={this.props.nightmode?"contactcontainer":"contactcontainer light"}>
              <h1>Get In Touch</h1>
              <span className={this.props.nightmode?null:"light"}><hr/></span>
              <p>Please feel free to say Hi 👋! or contact me if you have any question.
                <br/>I'll try my best to get back to you! 😊</p>
              <a href="mailto:comezheng@gmail.com">Contact me</a>
            </div>
            <div className="info">
              <a href="https://www.Linkedin.com/in/zhengjian-liu-33776553" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
              <a href="https://github.com/zhengjianliu" target="_blank" rel="noreferrer"><img src={Github} alt="Github"/></a>
              <a href="https://medium.com/@comezheng" target="_blank" rel="noreferrer"><img src={Medium} alt="Medium"/></a>
              <a href="mailto:comezheng@gmail.com"><img src={Email} alt="Email"/></a>
            </div>
          </Fade>
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
