import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'

class Skill extends Component {

  displaySkills =(icons = this.props.icons)=>{
    return icons.map((icon,index)=>{
      return <img key={index} src={icon} alt="skill icon"/>
    })
  }

  render() {
    return (
      <Fade bottom duration={1000} delay={200}>
        <div className={this.props.nightmode?"skillbox":"skillbox light"}>
          <b>{this.props.topic}</b>
          <div className="skill">
            {this.displaySkills()}
            <p>{this.props.desp}</p>
          </div>
        </div>
      </Fade>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default connect(msp)(Skill)
