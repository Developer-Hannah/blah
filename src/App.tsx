// imports
import React from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

// create interface so that program knows varriable types
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// pull in date and set to myData varriable
const myData = jsonData.teams;

// create function to display heading and introduce user to page
function Welcome() {
  return <h1>Information on colleges in NCAA Basketball</h1>;
}

// create component to represent one team
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img />
        <h2>School Name: {oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

// create function to show list of teams
function TeamList() {
  return (
    <div>
      {myData.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

// app function
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
