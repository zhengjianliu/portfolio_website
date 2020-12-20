import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

class Home extends Component{
  render(){
    return(
      <div id="home" className="fullpage">
        <div className="positionbg">Full-Stack<br/>Web Developer</div>
        <div className="intro">
          <h1>Hey there,<br/><span>I'm Zhengjian Liu.</span><br/>Nice to meet ya!</h1>
          <h2>I'm a <span>full-stack web developer</span></h2>
          <p>Software Engineer (Full stack web developer) with a passion to build exceptional websites, applications or anything in between. With experience in Ruby on Rails, JavaScript, and React and a Background in Computer Information System, I discovered web development through accumulation of experience and feedback from colleagues. I take pride in being a hands-on and driven engineering team member who prototypes quickly and can arouse the passion of team members for innovation.</p>
        </div>
        <div className="infobox">
          <div>
            <a><img src={Linkedin}/></a>
            <a><img src={Github}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
