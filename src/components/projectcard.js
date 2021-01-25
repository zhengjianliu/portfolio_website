import React, {Component} from 'react'
import Pill from './Pill'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'

class ProjectCard extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  checksource = (link) =>{
    if(link.length>0){
      return true
    }else{
      return false
    }
  }

  render() {
    return (
      <Fade bottom delay={200} duration={1000} cascade>
        <div className="projectbox">
          <div className={this.props.nightmode?"projectboxleft": "projectboxleft light"} onClick={this.props.playVideo} >
            <a href={this.props.livedemo} target="_blank" rel="noreferrer">
              <img src={this.props.image} alt={this.props.name} />
            </a>
          </div>
          <div className={this.props.nightmode?"projectboxright": "projectboxright light"}>
            <h2>{this.props.name}</h2>
            <p>{this.props.desp}</p>
            <div className="pills">
              {this.displayTags()}
            </div>
            <div className="links">
              {this.checksource(this.props.video)?<a href={this.props.video} target="_blank" rel="noreferrer"><b>Video</b></a>:null}
              {this.checksource(this.props.frontend)?<a href={this.props.frontend} target="_blank" rel="noreferrer"><b>Front End</b></a>:null}
              {this.checksource(this.props.backend)?<a href={this.props.backend} target="_blank" rel="noreferrer"><b>Back End</b></a>:null}
            </div>
            <div className={this.props.nightmode?"livedemobutton":"livedemobutton light"}>
              <a href={this.props.livedemo} target="_blank" rel="noreferrer"><b>Live Demo</b></a>
            </div>
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

export default connect(msp)(ProjectCard)
