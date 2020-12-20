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
          <a className="learnmore" href="#about" onClick={this.props.closeHandler}>Learn more <span className="arrow">{"➤"}</span></a>
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
