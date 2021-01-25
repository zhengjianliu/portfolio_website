import React from 'react'
import Bounce from 'react-reveal/Bounce';

class Videoplayer extends React.Component{
    state={
        video:null,
        scrolled:false
    }
    
    componentDidMount(){
        document.addEventListener('scroll',e=>{
            this.setState({scrolled:true})
        })
    }


    render(){
        console.log(this.state)
        return(
            <Bounce bottom duration={1000} >
                <div className={!this.state.scrolled?"videocontainer":"small videocontainer "}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/woQ9vWkBT3w" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
                    </iframe>
                    {/* <div className="backlayer"></div> */}
                </div>
            </Bounce>
            
        )
    }
}

export default Videoplayer