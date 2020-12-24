import React, {Component} from 'react'
import Pill from './Pill'
import Arrowup from '../images/arrowup.png'
import Fade from 'react-reveal/Fade';

class ProjectCard extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  render() {
    let image = "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
    return (
      <Fade bottom>
        <div className="projectbox">
          <div className="projectboxleft">
          <img src={image}/>
          </div>
          <div className="projectboxright">
            <h2>{this.props.name}</h2>
            <p>{this.props.desp}</p>
            <div className="pills">
              {this.displayTags()}
            </div>
            <div className="links">
              <b>Video</b>
              <b>Front End</b>
              <b>Back End</b>
            </div>
            <div className="livedemobutton">
              <b>Live Demo</b>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default ProjectCard
