import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const addNewMember = teamMemberParam => {
    setTeamMembers([...teamMembers, {teamMemberParam, id: Date.now()}])
  }
  
  useEffect(() => {
    console.log(teamMembers)
  }, [teamMembers])
  
  return (
    <div className="App">
      <Form teamMembers={teamMembers} newMember={addNewMember} />
    </div>
  );
}

export default App;
