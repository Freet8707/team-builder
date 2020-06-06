import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Form from './Components/Form'
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
      <Form teamMembers={teamMembers} newMember={addNewMember} />
      <Link to='/teamMembers'>
        <button>Who's on the team?</button>
      </Link>
    </div>
  );
}

export default App;
