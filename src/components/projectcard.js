import React, {Component} from 'react'
import Pill from './Pill'
import Fade from 'react-reveal/Fade';
class ProjectCard extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  render() {
    return (
      <Fade bottom>
        <div className="projectbox">
          <div className="projectboxleft" >
            <a href={this.props.livedemo} target="_blank" rel="noreferrer">
              <img src={this.props.image} alt={this.props.name}/>
            </a>
          </div>
          <div className="projectboxright">
            <h2>{this.props.name}</h2>
            <p>{this.props.desp}</p>
            <div className="pills">
              {this.displayTags()}
            </div>
            <div className="links">
              <a href={this.props.video} target="_blank" rel="noreferrer"><b>Video</b></a>
              <a href={this.props.frontend} target="_blank" rel="noreferrer"><b>Front End</b></a>
              <a href={this.props.backend} target="_blank" rel="noreferrer"><b>Back End</b></a>
            </div>
            <div className="livedemobutton">
              <a href={this.props.livedemo} target="_blank" rel="noreferrer"><b>Live Demo</b></a>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default ProjectCard
