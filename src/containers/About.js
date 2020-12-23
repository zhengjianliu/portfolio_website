import React, {Component} from 'react'
import Html from '../images/html.png'
import Javascript from '../images/js.png'
import Reacticon from '../images/react.png'
import Redux from '../images/redux.png'
import Rubyonrails from '../images/rubyonrails.png'
import Affinity from '../images/affinity.png'
import Css from '../images/css.png'
import Typewriter from '../components/Typewriter'

class About extends Component{
  render(){
    var greeting = ["Hi, nice to meet ya!","Welcome to my website."]
    return(
      <div id="about" className="fullpage">
        <h1 className={this.props.open?"pagemark":"pagemark remove"}>About</h1>
        <div className="aboutcontainer">
          <div className="aboutleft">
            <p>Hi, My name is Zhengjian Liu, a software Engineer (Full stack web developer) with a passion to build exceptional websites,
              applications or anything in between. With experience in Ruby on Rails, JavaScript, and React
              and a Background in Computer Information System, I discovered web development through
              accumulation of experience and feedback from colleagues.<br/>
              <br/>
              I take pride in being a hands-on and driven engineering team member who prototypes quickly
              and can arouse the passion of team members for innovation.<br/>
              <br/>
              Here are a few technologies I've been working with recently:<br/>
            </p>
            <div className="icons">
              <img src={Html} alt="html icon"/>
              <img src={Css} alt="Css icon"/>
              <img src={Javascript} alt="Javascript icon"/>
              <img src={Reacticon} alt="Reacticon icon"/>
              <img src={Redux} alt="Redux icon"/>
              <img src={Affinity} alt="Affinity icon" className="smallericon"/>
              <img src={Rubyonrails} alt="Rubyonrails icon" className="smallericon"/>
            </div>
          </div>

          <div className="aboutright">
            <img src={Affinity} alt="selfie"/>
            <Typewriter titles={greeting}/>
          </div>
        </div>
      </div>
    )
  }
}

export default About
