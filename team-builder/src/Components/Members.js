import React from "react";

function Members(props) {
    return (
        <div>
            {props.teamMembers.map(item => (
                <div key={item.id}>
                    <h2>Name: {item.name}</h2>
                    <p>Rank: {item.rank}</p>
                </div>
            ))}
        </div>
    );
}

export default Members;