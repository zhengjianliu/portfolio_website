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

class Skills extends Component{
  render(){
    return(
      <div id="skills" className="fullpage">

        <div className="skillscontainer">
          <h1 className={this.props.open?"pagemark":"pagemark remove"}>My Skills</h1>
          <Skill
            topic={"A solid foundation"}
            icons={[Html, Css, Javascript]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
          <Skill
            topic={"Front End Development"}
            icons={[Reacticon,Redux]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
          <Skill
            topic={"Back End Development"}
            icons={[Rubyonrails]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
          <Skill
            topic={"Version Control"}
            icons={[Github]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
          <Skill
            topic={"Design Tool"}
            icons={[Affinity,Affinityphoto]}
            desp={"My coding journey started by learning how to create a mobile friendly website using html, css, js."}/>
        </div>
      </div>
    )
  }
}

export default Skills
