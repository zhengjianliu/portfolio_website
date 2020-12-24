import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import Blog1 from '../images/pokeball.png'
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
          <img src={Blog1}/>
          <div className="blog">
            <b>Self In Ruby🔥</b>
            <div className="blogtags pills">
              {this.displayTags()}
            </div>
            <br/>
            <small>Photo by Okusu on eskipaper.com</small>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Blog
