import React, {useState} from "react";

function TeamForm(props) {
    const [teamMember, setTeamMember] = useState({
        fname: '',
        rank: ''
    })

    const changeHandler = event => {
        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        });
    
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: '', rank: ''});
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
             type='textarea'
             name='rank'
             onChange={changeHandler}
             value={teamMember.rank}></input>

             <button type='submit'>Add Member</button>
        </form>
    )

}

export default TeamForm;