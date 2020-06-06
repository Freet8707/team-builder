import React, { useState } from 'react';

const Form = (props) => {
    const [teamMember, setTeamMember] = useState({name: 'Enter Name', email: 'Enter Email', role: 'Enter Team Member Role'})
    const spaceSetter = ' '
    
    // const addNewMember = props.newMember()

    const handleChanges = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault()
        props.newMember(teamMember)
        setTeamMember({name: "Enter Name", email: "Enter Email", role: "Enter Team Member Role"})
    }
    
    return(
        <div>
            <h2>Enter new team member information!</h2>
            <form onSubmit={submitForm}>
                <label htmlFor='nameInput'>Name:{spaceSetter}
                    <input type='text' id='nameInput' name='name' value={teamMember.name} onChange={handleChanges}/>
                </label><br />
                <label htmlFor='emailInput'>Email:{spaceSetter}
                    <input type='text' id='emailInput' name='email' value={teamMember.email} onChange={handleChanges}/>                    
                </label><br />
                <label htmlFor='roleInput'>Role:{spaceSetter}
                    <input type='text' id='roleInput' name='role' value={teamMember.role} onChange={handleChanges}/>                     
                </label><br />

                <button type='submit'>Submit Team Member Information</button>
            </form>
        </div>
    )
}

export default Form