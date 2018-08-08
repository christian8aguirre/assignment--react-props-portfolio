import React, { Component} from 'react'
import EduTitle from './EduTitle.jsx'
import { eduList } from '../data/datasource'

class DegreeHistory extends Component{
  render() {
    return (
      <section>
         <h4>Education</h4>
         {/* <!-- EduTitle --> */}
         <div class="degree-">
          { eduList.map(function (element) {
            return <EduTitle data = { element } />
          }) }
         </div>
      </section>
    )
  }
}

export default DegreeHistory;