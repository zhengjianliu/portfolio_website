import React, {Component} from 'react'
import Project from '../components/Project'
// import image from '../images/js.png'

class Projects extends Component {

  render() {
    let image = "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
    return (<div id="projects" className="fullpage">
      <h1 className={this.props.open
          ? "pagemark"
          : "pagemark remove"}>Projects</h1>
      <div className="projectcontainer">
        <Project image={image} alt={"project image"} desp={"Zip Trade"}/>
        <Project image={image} alt={"project image"} desp={"BestBey"}/>
        <Project image={image} alt={"project image"} desp={"YouPlay"}/>
        <Project image={image} alt={"project image"} desp={"Portfolio Website"}/>
        <Project image={image} alt={"project image"} desp={"Portfolio Website"}/>
        <Project image={image} alt={"project image"} desp={"Portfolio Website"}/>
      </div>

    </div>)
  }
}

export default Projects
