import React, {Component} from 'react'
import Blog from '../components/Blog'

class Blogs extends Component{
  state={
    blogs:[]
  }

  componentDidMount(){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@comezheng')
   .then((res) => res.json())
   .then((data) => {
      this.setState({blogs:data.items})
    })
  }

  renderBlogs = () =>{
    return this.state.blogs.map((blog, index)=>
    <Blog
      key={index}
      tags={blog.categories}
      name={blog.title}
      image={blog.thumbnail}
      link={blog.link}
      />)
  }

  render(){
    return(
      <>
        {this.state.blogs.length>0
          ?
          <div id="blogs" className="fullpage">
            <div className="blogscontainer">
              <h1 className={this.props.open?"pagemark":"pagemark remove"}>My Blogs</h1>
              {this.renderBlogs()}
            </div>
          </div>
          :
          null
        }
      </>
    )
  }
}

export default Blogs
