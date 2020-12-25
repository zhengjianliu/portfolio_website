import React, {Component} from 'react'
import Blog from '../components/Blog'
import Blogimage1 from '../images/pokeball.png'
import Blogimage2 from '../images/cssblog.jpg'
import Blogimage3 from '../images/animation.jpg'
class Blogs extends Component{
  render(){
    return(
      <div id="blogs" className="fullpage">
        <div className="blogscontainer">
          <h1 className={this.props.open?"pagemark":"pagemark remove"}>My Blogs</h1>
          <Blog
          tags={['Ruby','Programming']}
          name={"Self In Ruby🔥"}
          image={Blogimage1}
          imagesource={"Photo by Okusu on eskipaper.com"}
          link="https://comezheng.medium.com/self-in-ruby-8cbd7598af35"
          />
          <Blog
          tags={['CSS','HTML','Animation']}
          name={"CSS Animation🏃‍♀️"}
          image={Blogimage2}
          imagesource={"From journocode.com"}
          link="https://comezheng.medium.com/css-animation-%EF%B8%8F-82135209d065"
          />
          <Blog
          tags={['Javascript','CSS','Animation']}
          name={"CSS + Javascript = Animation"}
          image={Blogimage3}
          imagesource={"From BitDegree.org"}
          link="https://comezheng.medium.com/css-javascript-animation-4f98b3d5e69a"
          />
        </div>
      </div>
    )
  }
}

export default Blogs
