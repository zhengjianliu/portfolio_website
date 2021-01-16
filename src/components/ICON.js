import React from 'react'
import { ReactSVG } from 'react-svg'

const ICON = (props) =>{
  return(
    <ReactSVG src={props.src} beforeInjection={(svg) => {
      svg.classList.add('svg-class-name')
      svg.setAttribute('style', `width:${props.width}; fill:${props.fill}`)
    }}/>
  )
}
export default ICON
