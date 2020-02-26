import React, {useState} from 'react';

import TeamForm from "./Components/TeamForm";

import './App.css';

function App(props) {
  const [teamMembers, setTeamMembers] = useState([{
    name: '',
    rank: '',
    serialNumber: ''
  }]);
  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm></TeamForm>
    </div>
  );
}



export default App;
