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
    close: true,
    loading:false,
    height:0,
    currentHeight:0,
    scrollup:false,
  }

  clickHandler = () =>{
    this.setState({close:!this.state.close,scrollup:false})
  }

  closeHandler = () =>{
    this.setState({close:true,scrollup:false})
  }

  finishloading= (percentage) =>{
    if(percentage>100){
      this.setState({loading:true})
    }
  }

  nightmodeswitch = () =>{
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

  checkscroll = () =>{
    window.addEventListener('scroll',e=>{
      let height = document.body.scrollHeight
      let currentHeight = window.scrollY
      let before = this.state.currentHeight
      this.setState({height:height, currentHeight: currentHeight})
      let after = this.state.currentHeight
      if(after>1500){
        if(after>before){
          this.setState({scrollup:true})
        }else{
          this.setState({scrollup:false})
        }
      }
      if (currentHeight<40){
        this.setState({close:true})
      }
    })
  }

  componentDidMount(){
    this.checktime()
    this.checkscroll()
  }

  render(){
    return (
      <div className={this.props.nightmode?"App":"App light"}>
        {!this.state.loading?
        <Loading finishloading={this.finishloading}/>
        :
        <div className="wholeapp">
          <Home closeHandler={this.closeHandler} nightmode={this.props.nightmode}/>
          <Navbar close={this.state.close}
            clickHandler={this.clickHandler}
            closeHandler={this.closeHandler}
            scrollup={this.state.scrollup}
            nightmodeswitch={this.nightmodeswitch}/>
          <About close={this.state.close}/>
          <Skills close={this.state.close} />
          <Projects close={this.state.close}/>
          <Blogs close={this.state.close}/>
          <Contact close={this.state.close}/>
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
