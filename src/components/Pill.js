import React, {Component} from 'react'

class Pill extends Component {
  render() {
    return (
      <div className="pill">
        #{this.props.tag}
      </div>
  )
  }
}

export default Pill
