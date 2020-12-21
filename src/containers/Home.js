import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

class Home extends Component{
  state={
    titles:["full-stack web developer","problem solver","software developer"],
    target:0,
    letters:-1,
    count:-1,
    typing:"",
  }


  typing = () =>{
    this.typingscript = setInterval(()=>{
      this.setState({count:this.state.count+1,letters:this.state.letters+1})
      this.setState({typing:this.state.titles[this.state.target].substr(0,this.state.count)})
      if(this.state.titles[this.state.target].length===this.state.count){
        this.checkTyping()
      }
    },100)
  }

  deleting = () =>{
    this.deletingscript = setInterval(()=>{
      this.setState({letters:this.state.letters-1})
      this.setState({typing:this.state.titles[this.state.target].substr(0,this.state.letters)})
      if(this.state.letters===-1){
        this.afterDeleting()
      }
    },50)
  }

  checkTyping = ()=>{
    clearInterval(this.typingscript)
    setTimeout(()=>{
      this.deleting()
    },3000)
  }

  afterDeleting = () =>{
    clearInterval(this.deletingscript)
    this.setState({count:0})
    if(this.state.titles.length===this.state.target+1){
      this.setState({target:0})
    }else{
      this.setState({target:this.state.target+1})
    }
    this.typing()
  }

  componentDidMount(){
    this.typing()
  }

  render(){
    return(
      <div id="home" className="fullpage">
        <div className="positionbg">Full-Stack<br/>Web Developer</div>
        <div className="intro">
          <h1>Hey there,<br/><span>I'm Zhengjian Liu.</span><br/>Nice to meet ya!</h1>
          <h2>I'm a <br/><span>{this.state.typing}<b>|</b></span></h2>
          <a className="learnmore" href="#about" onClick={this.props.closeHandler}>Learn more <span className="arrow">{"➤"}</span></a>
      </div>
        <div className="infobox">
          <div>
            <a><img src={Linkedin}/></a>
            <a><img src={Github}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
