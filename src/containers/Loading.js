import React, {Component} from 'react'
import Wave from 'react-wavify'

class Loading extends Component{
  state={
    percentage:0,
  }

  loader = () =>{
    this.loaderscript = setInterval(()=>{
      this.setState({percentage:this.state.percentage+1})
      this.checkloader()
    },22)
  }

  checkloader=()=>{
    if(this.state.percentage > 100){
      clearInterval(this.loaderscript)
      this.props.finishloading(this.state.percentage)
    }
  }

  componentDidMount(){
      this.loader()
  }
  render(){
    return(
      <div id="loading" className={this.state.percentage>80?"done":null}>
      <div className="wave" style={ { bottom: `${ this.state.percentage+4}vh` } }>
      <Wave fill='rgb(0, 158, 217)'
        paused={false}
        options={{
          height: 100,
          amplitude: 20,
          speed: 0.5,
          points: 4,
        }}/>
        </div>
        <h1>{parseInt(this.state.percentage)}% Loading... 🏃</h1>
        <div className="base" style={ { height: `${ this.state.percentage }vh` } }></div>
        </div>
    )
  }
}

export default Loading
