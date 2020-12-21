import React, {Component} from 'react'
import Project from '../components/Project'

class Projects extends Component{
  render(){
    return(
      <div id="projects" className="fullpage">
        <h1 className={this.props.open?"pagemark":"pagemark remove"}>Projects</h1>
        <div className="projectcontainer">
        </div>

      </div>
    )
  }
}

export default Projects
