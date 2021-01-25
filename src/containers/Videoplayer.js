import React from 'react'
import Slide from 'react-reveal/Slide';

class Videoplayer extends React.Component{
    state={
        video:null,
        scrolled:false,
        title:null,
        desp:null,
        backend:null,
        frontend:null,
        website:null,
    }
    
    componentDidMount(){
        document.addEventListener('scroll',e=>{
            this.setState({scrolled:true})
        })
    }

    videosizeHandler = ()=>{
        this.setState({scrolled:!this.state.scrolled})
    }


    render(){
        console.log(this.state)
        return(
            <Slide bottom duration={500}>
                <div className={!this.state.scrolled?"videocontainer":"small videocontainer "}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/woQ9vWkBT3w" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
                    </iframe>
                    <div className="videoinfo">
                        <div>
                            <p>Ziptrade</p>
                        </div>
                        <div className="videolinks">
                            <a href="">Frontend</a>
                            <a href="">Backend</a>
                            <a href="">Website</a>
                        </div>
                    </div>
                    <div className="videoactions">
                        <ul className="close">
                            <li></li>
                            <li></li>
                        </ul>
                        <div className="miniwindow" onClick={this.videosizeHandler}>
                            <div></div>
                            <div></div>
                        </div>

                    </div>
                    
                </div>
            </Slide>
            
        )
    }
}

export default Videoplayer