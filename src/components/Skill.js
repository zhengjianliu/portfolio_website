import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

class Skill extends Component {

  displaySkills =(icons = this.props.icons)=>{
    return icons.map((icon,index)=>{
      return <img key={index} src={icon} alt="skill icon"/>
    })
  }

  render() {
    return (
      <Fade bottom>
        <div className="skillbox">
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

export default Skill
