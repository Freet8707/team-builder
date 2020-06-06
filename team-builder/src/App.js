import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Components/Form';
import TeamRender from './Components/TeamRender'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const addNewMember = teamMember => {
    setTeamMembers([...teamMembers, {teamMember, id: Date.now()}])
  }
  
  useEffect(() => {
    console.log(teamMembers)
  }, [teamMembers])
  
  return (
    <div className="App">
      <Link to='/forms'>
        <button>Add New Team Member</button>
      </Link><br />      
      <Link to='/forms/teamMembers'>
        <button>Who's on the team?</button>
      </Link>
      <Switch> 
        <Route path='/forms/teamMembers' render={() => {
          return <TeamRender teamMembers={teamMembers} />
        }} />
        <Route path='/forms' render={() => {
          return <Form teamMembers={teamMembers} newMember={addNewMember} />
        }} />
      </Switch>
      
    </div>
  );
}

export default App;
