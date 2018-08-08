import React, { Component } from 'react'

class Job extends Component {
  render() {
    return (
      <div className="job">
        <div className="job__years">
          <h6 className="job__end">{ this.props.data.years.end }</h6>
          <h6 className="job__start">{ this.props.data.years.start }</h6>
        </div>
        <h5 className="job__title">{ this.props.data.title }</h5>
        <h5 className="job__company">{ this.props.data.company }</h5>
        <p className="job__description">{ this.props.data.description }</p>
      </div>
    )
  }
}

export default Job