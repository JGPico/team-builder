import React, {useState} from 'react';

import Members from "./Components/Members";
import TeamForm from "./Components/TeamForm";

import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    id: 1,
    name: 'James',
    rank: 'Dashing',
  }]);

  function addNewMember (member) {
    const newMember = {
      id: Date.now(),
      name: member.name,
      rank: member.rank
    };
    setTeamMembers([...teamMembers, newMember]);
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewMember={addNewMember}></TeamForm>
      <Members teamMembers={teamMembers}></Members>
    </div>
  );
}

export default App;
