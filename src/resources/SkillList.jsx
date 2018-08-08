import React, { Component } from 'react'
import Skill from './Skill.jsx'
import { skills } from '../data/datasource'

class SkillList extends Component {
  render() {
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {/* <!-- Skill --> */}
          { skills.map(function (skill) {
            return <Skill skill = { skill } />
          }) }          
        </div>
       </section>
    )
  }
}

export default SkillList