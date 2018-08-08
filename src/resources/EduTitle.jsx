import React, { Component } from 'react'


class EdutTitle extends Component {
  render() {
    return (
      <div className="degree">
        <h5 className="degree__institute">{ this.props.data.institute }</h5>
        <p className="degree__field">{ this.props.data.fieldOfStudy }</p>
        <p className="degree__dates">{ this.props.data.dates }</p>
      </div>
    )
  }
}

export default EdutTitle