import React, {Component} from 'react'
import Arrow from '../images/arrow1.png'
import Typewriter from '../components/Typewriter'
import {connect} from 'react-redux'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Social from '../components/Social'

class Home extends Component{
  render(){
    return(
      <div id="home" className="fullpage">
        <div className={this.props.nightmode?"backgroundimage":"light backgroundimage"}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <div className={this.props.nightmode? "intro":"intro light"}>
          <Fade delay={200} bottom cascade>
            <div><h1>👋 Hey there!</h1></div>
          </Fade>
          <Fade delay={400} bottom >
            <div><h1>My name is</h1></div>
          </Fade>
          <Fade delay={600} bottom >
            <div><h1 style={{color: "#009ed9"}}>Zhengjian Liu</h1></div>
          </Fade>
            <h2>I'm <Typewriter titles={['a Full Stack Developer', 'a Problem Solver 🤔','Ready To Work With You']}/></h2>
          <Fade delay={1300} bottom>
            <Link to="about" smooth={true} duration={500} onClick={this.props.closeHandler}><img className="arrow" src={Arrow} alt="scroll down"/></Link>
          </Fade>
        </div>
        <div className="infobox">
          <Social display="block" position="fixed" iconsize="40" direction="bottom"/>
        </div>
      </div>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}

export default connect(msp)(Home)
