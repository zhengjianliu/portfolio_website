import './styles/App.css';
import React, {Component} from 'react'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Navbar from './containers/Navbar'
import Footer from './containers/Footer'
import Loading from './containers/Loading'
import Blogs from './containers/Blogs'
import Skills from './containers/Skills'
import {connect} from 'react-redux'

class App extends Component{
  state={
    open: true,
    loading:false,
    height:0,
    currentHeight:0,
    progress:0,
  }

  clickHandler = () =>{
    this.setState({open:!this.state.open})
  }

  closeHandler = () =>{
    this.setState({open:true})
  }

  finishloading= (percentage) =>{
    if(percentage>100){
      this.setState({loading:true})
    }
  }

  nightmode = () =>{
    this.props.changeMode()
  }

  checktime = () =>{
    var currentTime = new Date()
    let hours = currentTime.getHours()
    //  between 6 ~ 17   6:00am ~ 5:00pm lightMode is ON
    if(hours >=17 || hours <6){
      this.props.darkMode()
    }else{
      this.props.lightMode()
    }
  }

  // checkscroll = () =>{
  //   window.addEventListener('scroll',e=>{
  //     let height = document.body.scrollHeight
  //     let currentHeight = window.scrollY
  //     this.setState({height:height, currentHeight: currentHeight})
  //     if (currentHeight>20){
  //       this.setState({progress: parseInt(currentHeight/(height-1000)*100)})
  //     }else if (currentHeight<20){
  //       this.setState({progress:0})
  //     }else if (currentHeight >90){
  //       this.setState({progress:100})
  //     }
  //   })
  // }

  componentDidMount(){
    this.checktime()
    // this.checkscroll()
  }

  render(){
    return (
      <div className={this.props.nightmode?"App":"App light"}>
        {!this.state.loading?
        <Loading finishloading={this.finishloading}/>
        :
        <div className="wholeapp">
          <Home closeHandler={this.closeHandler}/>
          <div className="modebutton" onClick={this.nightmode}>{this.props.nightmode?"Dark On":"Dark Off"}</div>
          <Navbar open={this.state.open} clickHandler={this.clickHandler} closeHandler={this.closeHandler} progress={this.state.progress}/>
          <About open={this.state.open}/>
          <Skills open={this.state.open} />
          <Projects open={this.state.open}/>
          <Blogs open={this.state.open}/>
          <Contact open={this.state.open}/>
          <Footer/>
        </div>
        }
      </div>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

const mdp = dispatch =>{
  return {
    changeMode: () =>dispatch({type:"CHANGE_MODE"}),
    lightMode:() =>dispatch({type:"LIGHT_MODE"}),
    darkMode:() =>dispatch({type:"DARK_MODE"}),
  }
}

export default connect(msp,mdp)(App);
