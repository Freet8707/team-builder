import React from 'react';
import { useHistory } from 'react-router-dom';

function TeamDisplay(props) {
    const teamMembers = props.teamMembers
    const history = useHistory()

    function MemberCard(props){
        return (
            <div>
                <h4>Name: {props.name}</h4>
                <h4>Email: </h4>
                <p>{props.email}</p>
                <h4>Role: </h4>
                <p>{props.role}</p>
            </div>
        )
    }

    return(
        <div>
            <button onClick={() => history.push('/')}>Go Back</button>
            {teamMembers.map(member => (
                <MemberCard key={member.id} name={member.teamMember.name} email={member.teamMember.email} role={member.teamMember.role} />     
            ))}
        </div>
    )
}

export default TeamDisplay