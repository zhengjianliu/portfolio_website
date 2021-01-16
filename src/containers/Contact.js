import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'
import Arrow from '../images/arrow1.png'
import {animateScroll as scroll} from 'react-scroll'
import Social from '../components/Social'

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
            <div className="info">
              <Social display="flex" position="absolute" iconsize="40"/>
            </div>
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
