import React, {Component} from 'react'
import Html from '../images/html.png'
import Javascript from '../images/js.png'
import Reacticon from '../images/react.png'
import Redux from '../images/redux.png'
import Rubyonrails from '../images/rubyonrails.png'
import Affinity from '../images/affinity.png'
import Css from '../images/css.png'
import Typewriter from '../components/Typewriter'

class Blogs extends Component{
  render(){
    return(
      <div id="blogs" className="fullpage">
        <div className="blogscontainer">
          <h1 className={this.props.open?"pagemark":"pagemark remove"}>My Blogs</h1>
        </div>
      </div>
    )
  }
}

export default Blogs
