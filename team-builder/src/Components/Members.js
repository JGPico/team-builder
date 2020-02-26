import React, {useState} from "react";

function Members(props) {

    const [isEditing, setIsEditing] = useState(false);

    const submitEdit = event => {
        event.preventDefault();
        setIsEditing(false);
    }

    return (
        <div className='member-holder'>
            {props.teamMembers.map(item => (
                <div className='member' key={item.id}>
                    <h2>Name: {item.fname}</h2>
                    <p>Rank: {item.rank}</p>
                    <div className='button-holder'>
                        {isEditing ? (
                             <form onSubmit={submitEdit}>
                                 <label htmlFor='editName'>Name: </label>
                                 <input id='editName'
                                 type='text'></input>

                                 <label htmlFor='editName'>Rank: </label>
                                 <input id='editName'
                                 type='text'></input>

                                 <button type='submit'>Finish</button>
                             </form>
                         ) : (
                             <button onClick={()=> setIsEditing(true)} className='edit-button'>Edit</button>
                         )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Members;