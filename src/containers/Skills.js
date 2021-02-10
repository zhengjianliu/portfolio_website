import React, {Component} from 'react'
import Html from '../images/html.png'
import Javascript from '../images/js.png'
import Reacticon from '../images/react.png'
import Redux from '../images/redux.png'
import Rubyonrails from '../images/rubyonrails.png'
import Affinity from '../images/affinity.png'
import Css from '../images/css.png'
import Skill from '../components/Skill'
import Affinityphoto from '../images/affinity-photo.png'
import Github from '../images/github.png'
import Slide from 'react-reveal/Slide';

class Skills extends Component{
  render(){
    return(
      <div id="skills" className="fullpage">
        <div className="skillscontainer">
          <Slide left duration={700}>
          <h1 className={this.props.close?"pagemark":"pagemark remove"}>My Skills</h1>
          </Slide>
          <Skill
            topic={"A solid foundation"}
            icons={[Html, Css, Javascript]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
          <Skill
            topic={"Front End Development"}
            icons={[Reacticon,Redux]}
            desp={"I use react for front-end development, and use redux to handle states. I ensure the reliability of my code, and at the same time make sure my code is dry by creating reusable compoenents."}/>
          <Skill
            topic={"Back End Development"}
            icons={[Rubyonrails]}
            desp={"I use ruby on rails to develop backend, and follow the design of MVC to implement and achieve the functional requirements of each project."}/>
          <Skill
            topic={"Version Control"}
            icons={[Github]}
            desp={"I use Github in nearly every single of my project for version control. Also, I familiar with using terminal interface for github."}/>
          <Skill
            topic={"Design Tool"}
            icons={[Affinity,Affinityphoto]}
            desp={"I use affinity designer tools to design and produce front-end icons and backgrounds...etc. Also, optimize visual apperance of the software and the user experience."}/>
        </div>
      </div>
    )
  }
}

export default Skills
