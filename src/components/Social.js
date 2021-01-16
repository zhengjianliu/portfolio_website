import React from 'react'
import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.svg'
import Medium from '../images/medium.svg'
import Email from '../images/email.svg'
import ICON from '../components/ICON'
import {connect} from 'react-redux'
import Bounce from 'react-reveal/Bounce';

class Social extends React.Component{
  iconMode = () =>{
    if(this.props.nightmode){
      return 'rgb(255, 255, 255)'
    }else{
      return 'rgb(0, 0, 0)'
    }
  }

  render(){
    const iconsize = this.props.iconsize
    return(
        <Bounce right cascade duration={1300}>
          <ul style={{display:`${this.props.display}`}}>
            <li><a href="mailto:comezheng@gmail.com"><ICON src={Email} width={iconsize} fill={this.iconMode()}/></a></li>
            <li><a href="https://medium.com/@comezheng" rel="noreferrer" target="_blank"><ICON src={Medium} width={iconsize} fill={this.iconMode()}/></a></li>
            <li><a href="https://github.com/zhengjianliu" rel="noreferrer" target="_blank"><ICON src={Github} width={iconsize} fill={this.iconMode()}/></a></li>
            <li><a href="https://www.linkedin.com/in/zhengjian-jay-liu-33776553/" rel="noreferrer" target="_blank"><ICON src={Linkedin} width={iconsize} fill="rgb(23, 152, 200)"/></a></li>
          </ul>
      </Bounce>
    )
  }
}

const msp = state =>{
  return{
    nightmode: state.nightmode,
  }
}
export default connect(msp)(Social)
