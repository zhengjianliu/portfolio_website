import React, {Component} from 'react'

class Projects extends Component{
  render(){
    return(
      <div id="projects" className="fullpage">
        <h1 className={this.props.open?"pagemark":"pagemark remove"}>Projects</h1>
      </div>
    )
  }
}

export default Projects
