import React, {Component} from 'react'

class About extends Component{
  render(){
    return(
      <div id="about" className="fullpage">
        <h1 className={this.props.open?"pagemark":"pagemark remove"}>About</h1>
        <p>Software Engineer (Full stack web developer) with a passion to build exceptional websites, applications or anything in between. With experience in Ruby on Rails, JavaScript, and React and a Background in Computer Information System, I discovered web development through accumulation of experience and feedback from colleagues. I take pride in being a hands-on and driven engineering team member who prototypes quickly and can arouse the passion of team members for innovation.</p>
      </div>
    )
  }
}

export default About
