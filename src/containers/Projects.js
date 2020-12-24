import React, {Component} from 'react'
import Project from '../components/projectcard'
import Fade from 'react-reveal/Fade';

class Projects extends Component {

  render() {
    let image = "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
    return (
      <div id="projects" className="fullpage">
      <div className="projectcontainer">
        <h1 className={this.props.open? "pagemark":"pagemark remove"}>Projects</h1>
        <Project
          image={image}
          alt={"project image"}
          name={"Zip Trade"}
          tags={['ReactJS','Redux','ROR',]}
          desp="The second-hand marketing app provides a connection for sellers and buyers living in the same postal area."
          />
        <Project
          image={image}
          alt={"project image"}
          name={"BestBey"}
          tags={['ReactJS','Redux','ROR']}
          desp="Bestbey is an eCommerce store that brings you superior quality in electronics."
          />
        <Project
          image={image}
          alt={"project image"}
          name={"YouPlay"}
          tags={['ROR','Affinity']}
          desp="Ruby on Rails full stack application that allows users to search, view, comment on videos online"
          />
        <Project
          image={image}
          alt={"project image"}
          name={"Portfolio Website"}
          tags={['ReactJS','Affinity']}
          desp="I designed the personal homepage and implemented the dark & light mode features to it."
            />
          <Fade bottom><button className="viewmorebutton">View More</button></Fade>
      </div>
    </div>
    )
  }
}

export default Projects
