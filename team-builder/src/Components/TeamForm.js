import React, {useState} from "react";

function TeamForm(props) {
    const [teamMember, setTeamMember] = useState({
        fname: 'James',
        rank: 'Dashing'
    })

    const changeHandler = event => {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        });
    
    }

    const submitForm = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='fname'>Name</label>
            <input id='fname'
             type='text'
             name='fname' 
             onChange={changeHandler}
             value={teamMember.fname}></input>

             <label htmlFor='rank'>Rank</label>
             <input id='rank'
             type='text'
             name='rank'
             onChange={changeHandler}
             value={teamMember.rank}></input>
        </form>
    )

}



export default TeamForm;