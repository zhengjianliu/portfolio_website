import React,{Component} from 'react'
import {connect} from 'react-redux'

class Modebutton extends Component {
    render() {
        return (
            <div className={this.props.nightmode?"buttonbody":"buttonbody light"}>
                <span>
                    <div className={this.props.nightmode?"modecircle":"modecircle light"}></div>
                    <p>{this.props.nightmode?"NIGHTMODE":"DAYMODE"}</p>
                </span>
            </div>
        )
    }
}

const msp = state =>{
    return{
        nightmode: state.nightmode
    }
}
export default connect(msp)(Modebutton)