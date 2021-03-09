import React, {Component} from 'react'
import Project from '../components/projectcard'
import Fade from 'react-reveal/Fade';
import Ziptrade from '../images/ziptrade.jpg'
import Bestbey from '../images/bestbey.jpg'
import Youplay from '../images/youplay.jpg'
import Porfolio from '../images/portfolio.jpg'
import {connect} from 'react-redux'
import Slide from 'react-reveal/Slide';

class Projects extends Component {
  state={
    openvideo:false,
  }
  playVideo = () =>{
    this.setState({openvideo:!this.state.openvideo})
  }
  render() {
    return (
      <div id="projects" className="fullpage">
      <div className="projectcontainer">
      <Slide left duration={700}><h1 className="pagemark">My Projects</h1></Slide>
        <Project
          image={Ziptrade}
          alt={"project image"}
          name={"Zip Trade"}
          tags={['ReactJS','Redux','ROR',]}
          desp="An local marketing web application that provides a connection for local community."
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
          desp="An electronic e-commerce websites that allows user to place order and search eletronic products."
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
          desp="An Ruby on Rails full stack application that allows users to search, view, comment on videos online"
          frontend="https://github.com/zhengjianliu/YouPlay/tree/master/app/views"
          backend="https://github.com/zhengjianliu/YouPlay"
          livedemo="https://you-play-heroku.herokuapp.com"
          video=""
          />
        <Project
          image={Porfolio}
          alt={"project image"}
          name={"Portfolio Website"}
          tags={['ReactJS','Redux','Affinity']}
          desp="My portfolio website that implemented the dark & light mode feature."
          frontend="https://github.com/zhengjianliu/portfolio_website"
          backend=""
          livedemo="/"
          video=""
          />
        <Fade bottom duration={1000} delay={200}>
          <a href="https://github.com/zhengjianliu?tab=repositories" target="_blank" rel="noreferrer">
            <button className={this.props.nightmode?"viewmorebutton":"viewmorebutton light"}>View More</button>
          </a>
        </Fade>
      </div>
    </div>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default (connect)(msp)(Projects)
