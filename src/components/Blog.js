import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import Pill from './Pill'
import {connect} from 'react-redux'

class Blog extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  render() {
    return (
      <Fade bottom duration={1000} delay={200}>
        <div className={this.props.nightmode?"blogbox":"blogbox light"}>
          <a href={this.props.link} target="_blank" rel="noreferrer">
            <div className="blogcontainer">
              <img src={this.props.image} alt="img" rel="noreferrer"/>
              <p>{this.props.pubDate}</p>
            </div>
          </a>
          <div className={this.props.nightmode?"blog":"blog light"}>
            <b>{this.props.name}</b>
            <div className="blogtags pills">
              {this.displayTags()}
            </div>
            <br/>
            <small>{this.props.imagesource}</small>
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

export default connect(msp)(Blog)
