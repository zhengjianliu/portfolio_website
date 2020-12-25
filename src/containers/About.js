import React, {Component} from 'react'
import Html from '../images/html.png'
import Javascript from '../images/js.png'
import Reacticon from '../images/react.png'
import Redux from '../images/redux.png'
import Rubyonrails from '../images/rubyonrails.png'
import Affinity from '../images/affinity.png'
import Css from '../images/css.png'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'

class About extends Component{
  render(){
    return(
      <div id="about" className="fullpage">

        <div className="aboutcontainer">
          <div className={this.props.nightmode?"aboutleft":"aboutleft light"}>
            <h1 className={this.props.open?"pagemark":"pagemark remove"}>About Me</h1>
            <Fade bottom>
              <p>
              <b>Hi, my name is Zhengjian Liu,
              <br/> a software Engineer (Full stack web developer) with a passion to build exceptional websites,
              applications or anything in between.</b>
              </p>
              </Fade>
              <Fade bottom>
              <p>
              <br/>
              <br/>
              With experience in Ruby on Rails, JavaScript, and React
              and a Background in Computer Information System, I discovered web development through
              accumulation of experience and feedback from colleagues. I take pride in being a
              hands-on and driven engineering team member who prototypes quickly
              and can arouse the passion of team members for innovation.<br/>
              <br/>
              Here are a few technologies I've been working with recently:<br/>
            </p>
            </Fade>
            <Fade bottom cascade>
            <div className="icons">
              <img src={Html} alt="html icon"/>
              <img src={Css} alt="Css icon"/>
              <img src={Javascript} alt="Javascript icon"/>
              <img src={Reacticon} alt="Reacticon icon"/>
              <img src={Redux} alt="Redux icon"/>
              <img src={Affinity} alt="Affinity icon" className="smallericon"/>
              <img src={Rubyonrails} alt="Rubyonrails icon" className="smallericon"/>
            </div>
            </Fade>
            <Fade bottom cascade>
              <div className="resumelink">
                <div>
                  <a href="https://docs.google.com/document/d/1yjKZIodyngLcENDMbB2YUz-SPTznlJJFHwof2R4XVjc/edit?usp=sharing" target="_blank" rel="noreferrer">View Resume</a>
                  <a href="https://www.Linkedin.com/in/zhengjian-liu-33776553" target="_blank" rel="noreferrer">Go to Linkedin</a>
                </div>
              </div>
            </Fade>
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

export default connect(msp)(About)
