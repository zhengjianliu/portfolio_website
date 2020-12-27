import React, {Component} from 'react'
import {connect} from 'react-redux'



class Typewriter extends Component{
  state={
    titles:[],
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
    },50)
  }

  deleting = () =>{
    this.deletingscript = setInterval(()=>{
      this.setState({letters:this.state.letters-1})
      this.setState({typing:this.state.titles[this.state.target].substr(0,this.state.letters)})
      if(this.state.letters===-1){
        this.afterDeleting()
      }
    },20)
  }

  checkTyping = ()=>{
    clearInterval(this.typingscript)
    setTimeout(()=>{
      this.deleting()
    },2000)
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
    this.setState({titles:this.props.titles})
    this.typing()
  }
  render(){
    return(
      <span>{this.state.typing}<b className={this.props.nightmode? "typerwriter": "typerwriter light"}>|</b></span>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default  connect(msp)(Typewriter)
