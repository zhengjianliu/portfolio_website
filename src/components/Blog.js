import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

import Pill from './Pill'

class Blog extends Component {

  displayTags = (tags = this.props.tags) => {
    return tags.map((tag,index) => {
      return <Pill key={index} tag={tag}/>
    })
  }

  render() {
    return (
      <Fade bottom>
        <div className="blogbox">
          <a href={this.props.link} target="_blank" rel="noreferrer">
            <img src={this.props.image} alt="img" rel="noreferrer"/>
          </a>
          <div className="blog">
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

export default Blog
