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
          desp="wqiufi wqjevwqiv wq riuewqgr qwuwr wqg rqw9g  iwqe i"
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
          name={"TikTok Clone"}
          tags={['Vanilla JS','ROR','Affinity']}
          desp="The web version of TikTok uses YouTube API to generate video feed and provides a user experience similar to TikTok"
            />
            <Project
              image={image}
              alt={"project image"}
              name={"Portfolio Website"}
              tags={['ReactJS','Affinity']}
              desp="wqiufi wqjevwqiv wq riuewqgr qwuwr wqg rqw9g  iwqe i"
                />
      </div>

    </div>)
  }
}

export default Projects
