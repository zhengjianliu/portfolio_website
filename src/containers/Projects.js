import React, {Component} from 'react'
import Project from '../components/projectcard'
import Fade from 'react-reveal/Fade';
import Ziptrade from '../images/ziptrade.jpg'
import Bestbey from '../images/bestbey.jpg'
import Youplay from '../images/youplay.jpg'
import Porfolio from '../images/portfolio.jpg'

class Projects extends Component {

  render() {
    return (
      <div id="projects" className="fullpage">
      <div className="projectcontainer">
        <h1 className={this.props.open? "pagemark":"pagemark remove"}>My Projects</h1>
        <Project
          image={Ziptrade}
          alt={"project image"}
          name={"Zip Trade"}
          tags={['ReactJS','Redux','ROR',]}
          desp="The second-hand marketing app provides a connection for sellers and buyers living in the same postal area."
          frontend="https://github.com/zhengjianliu/ziptrade-frontend"
          backend="https://github.com/zhengjianliu/ziptrade-backend"
          livedemo="https://ziptrade.netlify.app"
          video=""
          />
        <Project
          image={Bestbey}
          alt={"project image"}
          name={"BestBey"}
          tags={['ReactJS','Redux','ROR']}
          desp="Bestbey is an eCommerce store that brings you superior quality in electronics."
          frontend="https://github.com/zhengjianliu/bestbey"
          backend="https://github.com/zhengjianliu/bestbey-back"
          livedemo="https://bestbey.netlify.app"
          video=""
          />
        <Project
          image={Youplay}
          alt={"project image"}
          name={"YouPlay"}
          tags={['ROR','Affinity']}
          desp="Ruby on Rails full stack application that allows users to search, view, comment on videos online"
          frontend="https://github.com/zhengjianliu/YouPlay/tree/master/app/views"
          backend="https://github.com/zhengjianliu/YouPlay"
          livedemo="https://you-play-heroku.herokuapp.com"
          video=""
          />
        <Project
          image={Porfolio}
          alt={"project image"}
          name={"Portfolio Website"}
          tags={['ReactJS','Affinity']}
          desp="I designed the personal homepage and implemented the dark & light mode features to it."
          frontend="https://github.com/zhengjianliu/YouPlay/tree/master/app/views"
          backend=""
          livedemo=""
          video=""
          />
        <Fade bottom>
          <a href="https://github.com/zhengjianliu?tab=repositories" target="_blank" rel="noreferrer">
            <button className="viewmorebutton">View More</button>
          </a>
        </Fade>
      </div>
    </div>
    )
  }
}

export default Projects
