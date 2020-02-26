import React from "react";

function Members(props) {
    return (
        <div className='member-holder'>
            {props.teamMembers.map(item => (
                <div className='member' key={item.id}>
                    <h2>Name: {item.fname}</h2>
                    <p>Rank: {item.rank}</p>
                </div>
            ))}
        </div>
    );
}

export default Members;