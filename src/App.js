import './App.css';
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
class App extends Component{
  state={
    open: true,
    loading:false,
    nightmode:true,
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
    this.setState({nightmode:!this.state.nightmode})
  }

  checktime = () =>{
    var currentTime = new Date()
    let hours = currentTime.getHours()
    if(hours>16){
      this.setState({nightmode:true})
    }else{
      this.setState({nightmode:false})
    }
  }

  componentDidMount(){
    this.checktime()
  }


  render(){
    return (
      <div className={this.state.nightmode?"App": "App light"}>
        {!this.state.loading?
        <Loading finishloading={this.finishloading}/>
        :
        <div className="wholeapp">
          <Home closeHandler={this.closeHandler}/>
          <div className="modebutton" onClick={this.nightmode}>{this.state.nightmode?"Dark On":"Dark Off"}</div>
          <Navbar open={this.state.open} clickHandler={this.clickHandler} closeHandler={this.closeHandler}/>
          <About open={this.state.open} />
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

export default App;
