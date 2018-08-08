import React, { Component } from 'react';
import './css/styles.css'
import SkillList from './resources/SkillList';
import DegreeHistory from './resources/DegreeHistory';
import WorkHistory from './resources/WorkHistory'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SkillList />
        <DegreeHistory />
        <WorkHistory />
      </div>
    );
  }
}

export default App;
