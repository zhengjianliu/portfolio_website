import React, {Component} from 'react'
import Blog from '../components/Blog'
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'
class Blogs extends Component{
  state={
    blogs:[],
    number:6
  }

  componentDidMount(){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@comezheng')
   .then((res) => res.json())
   .then((data) => {
      this.setState({blogs:data.items})
    })
  }

  blogsHandler = () =>{
    if(this.state.blogs.length>0){
      return this.state.blogs.slice(0,this.state.number)
    }
  }
  viewmoreblog = () =>{
    this.setState({number:this.state.number+3})
  }
  renderBlogs = () =>{
    return this.blogsHandler().map((blog, index)=>
    <Blog
      key={index}
      tags={blog.categories}
      name={blog.title}
      image={blog.thumbnail}
      link={blog.link}
      pubDate={blog.pubDate.split(' ')[0]}
      />)
  }

  render(){
    return(
      <>
        {this.state.blogs.length>0
          ?
          <div id="blogs" className="fullpage">
            <div className="blogscontainer">
            <Fade bottom duration={1000} delay={50}><h1 className="pagemark">My Blogs</h1></Fade>
              {this.renderBlogs()}
              <div className="moreblog">
                {this.state.number>=this.state.blogs.length?
                  null
                  :
                  <button onClick={this.viewmoreblog} className={this.props.nightmode?"viewmorebutton":"viewmorebutton light"}>View More</button>
                }
              </div>
            </div>
          </div>
          :
          null
        }
      </>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default connect(msp)(Blogs)
