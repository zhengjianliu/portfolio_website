import React, {Component} from 'react'
import Blog from '../components/Blog'

class Blogs extends Component{
  render(){
    return(
      <div id="blogs" className="fullpage">
        <div className="blogscontainer">
          <h1 className={this.props.open?"pagemark":"pagemark remove"}>My Blogs</h1>
          <Blog tags={['Ruby','Programming']}/>
          <Blog tags={['Ruby','Programming']}/>
          <Blog tags={['Ruby','Programming']}/>
        </div>
      </div>
    )
  }
}

export default Blogs
