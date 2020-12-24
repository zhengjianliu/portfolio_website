import React, {Component} from 'react'
import Pill from './Pill'
import Arrowup from '../images/arrowup.png'
import Externallink from '../images/externallink.png'
import Sourcecode from '../images/sourcecode.png'
import Fade from 'react-reveal/Fade';

class Projects extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  render() {
    return (
      <Fade bottom>
          <div className="project">
          <div className="container">
            <img src={this.props.image} alt={this.props.alt} className="image"/>
            {/*<div className="links">
              <img src={Externallink} alt="Demo"/>
              <img src={Sourcecode} alt="Source Code"/>
            </div>*/}
            <div className="fulllinks">
              <p>Live Demo</p>
              <p>Video</p>
              <p>Front End</p>
              <p>Back End</p>
            </div>
            <div className="overlay">
              <div className="text">
                <img src={Arrowup} alt="scroll up"/>
                <br/>
                <b>Project Name:</b>
                {this.props.name}
                <br/>
                <div className="desp">{this.props.desp}</div>
                <div className="pills">
                  {this.displayTags()}
                </div>

              </div>
            </div>

          </div>
        </div>
      </Fade>
    )
  }
}

export default Projects
