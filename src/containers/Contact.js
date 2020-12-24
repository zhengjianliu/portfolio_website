import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

class Contact extends Component{
  render(){
    return(

        <div id="contact">
          <Fade bottom>
            <div className="contactcontainer">
              <h1>Get In Touch</h1>
              <hr/>
              <p>Please feel free to say Hi 👋! or contact me if you have any question.
                <br/>I'll try my best to get back to you! 😊</p>
              <a href="mailto:comezheng@gmail.com">Contact me</a>
            </div>
          </Fade>
        </div>

    )
  }
}

export default Contact
