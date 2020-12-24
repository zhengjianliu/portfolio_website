import React, {Component} from 'react'
import Pill from './Pill'
import Arrowup from '../images/arrowup.png'
import Externallink from '../images/externallink.png'
import Sourcecode from '../images/sourcecode.png'
import Html from '../images/html.png'
import Fade from 'react-reveal/Fade';

class Skill extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  displaySkills =(icons = this.props.icons)=>{
    return icons.map((icon,index)=>{
      return <img key={index} src={icon}/>
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
