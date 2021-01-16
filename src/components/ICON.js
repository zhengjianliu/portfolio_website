import React from 'react'
import { ReactSVG } from 'react-svg'

const ICON = (props) =>{
  return(
    <div className="icon">
      <ReactSVG src={props.src} beforeInjection={(svg) => {
        svg.classList.add('svg-class-name')
        svg.setAttribute('style', `width:${props.width}; fill:${props.fill}`)
      }}/>
    </div>
  )
}
export default ICON
