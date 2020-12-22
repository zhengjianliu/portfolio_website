import React, {Component} from 'react'

class Projects extends Component {
  render() {
    return (<div className="project">
      <div className="container">
        <img src={this.props.image} alt={this.props.alt} className="image"/>
        <div className="overlay">
          <div className="text"><b>Project Name:</b> {this.props.desp}</div>
        </div>
      </div>
    </div>)
  }
}

export default Projects
