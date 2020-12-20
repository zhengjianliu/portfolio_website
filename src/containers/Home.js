import React, {Component} from 'react'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

class Home extends Component{
  state={
    position:"full-stack web developer",
    letters:-1,
    count:-1,
    typing:"",
  }


  typing = () =>{
    this.myinterval = setInterval (()=>{
      this.setState({count:this.state.count+1,letters:this.state.letters+1})
      this.setState({typing:this.state.position.substr(0,this.state.count)})
    },150)

  }

  deleteing = () =>{
    this.backinterval = setInterval(()=>{
      this.setState({letters:this.state.letters-1})
      this.setState({typing:this.state.position.substr(0,this.state.letters)})
    },100)
  }

  componentDidMount(){
    this.typing()
    if(this.state.position.length === this.state.count){
      clearInterval(this.myinterval)
    }
  }

  render(){
    console.log(this.state)
    return(
      <div id="home" className="fullpage">
        {this.state.position.substr(0,10)}
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
