import React, {Component} from 'react'
import Html from '../images/html.png'
import Javascript from '../images/js.png'
import Reacticon from '../images/react.png'
import Redux from '../images/redux.png'
import Rubyonrails from '../images/rubyonrails.png'
import Affinity from '../images/affinity.png'
import Css from '../images/css.png'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {connect} from 'react-redux'
import Resume from '../resume/ZHENGJIANLIU_RESUME.pdf'

class About extends Component{
  render(){
    return(
      <div id="about" className="fullpage">

        <div className="aboutcontainer">
          <div className={this.props.nightmode?"aboutleft":"aboutleft light"}>
          <Slide left duration={700}><h1 className="pagemark">About Me</h1></Slide>
            <Fade bottom duration={1000} delay={100}>
              <p>
              <b>Hi, my name is Zhengjian Liu,
              <br/> a software engineer experienced in Ruby on Rails, React, and Javascript 
              based programming with a background in Computer Information Systems.</b>
              </p>
              </Fade>
              <Fade bottom duration={1000} delay={150}>
              <p>
              <br/>
              Possess a solid foundation of web development and the ability to conceptualize solutions 
              to complex problems. I take pride in being a hands-on and driven engineering team member 
              who prototypes quickly and can arouse the passion of team members for innovation.
              <br/>
              <br/>
              Here are a few technologies I've been working with recently:<br/>
            </p>
            </Fade>
            <Fade bottom duration={1000} delay={300} cascade>
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
            <Fade bottom duration={1000} delay={300} cascade>
              <div className="resumelink">
                <div>
                  <a href={Resume} target="_blank" rel="noreferrer">View Resume</a>
                  <a href="https://www.linkedin.com/in/zhengjian-jay-liu-33776553/" target="_blank" rel="noreferrer">Go to Linkedin</a>
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
