import React, { Component } from 'react'
import Job from './Job.jsx'
import { jobsList } from '../data/datasource'

class WorkHistory extends Component {
  render() {
    return (
      <section>
        <h4>Work Experience</h4>

        <div className="job-timeline">
          {/* <!-- Job --> */}
          { jobsList.map(function (element) {
            return <Job data = { element } />
          }) }
        </div>
      </section>
    )
  }
}

export default WorkHistory;