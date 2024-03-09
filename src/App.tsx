import React from 'react';
//import logo from './logo.svg';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';

//interface BandProps {
//name: string;
//members: string;
//formed: string;
//}
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

//const bandNames = [
//{
//name: 'Name1',
//members: 'Name1',
//formed: 'Name1',
//},
//{
//name: 'Name2',
////members: 'Name2',
//formed: 'Name2',
//},
//{
//name: 'Name3',
//members: 'Name3',
//formed: 'Name3',
//},
//];
const myData = jsonData.teams;

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

//class Band extends React.Component<BandProps> {
//render() {
//const oneBand = this.props;

//return (
//<div>
//<img />
//<h2>{oneBand.name}</h2>
//<h3>Members: {oneBand.members}</h3>
//<h3>Formed: {oneBand.formed}</h3>
//</div>
//);
//}
//}
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

//function BandList() {
//return (
//<div>
//{bandNames.map((oneBand) => (
//<Band {...oneBand} />
//))}
//</div>
//);
//}
function TeamList() {
  return (
    <div>
      {myData.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

//function App() {
//return (
//<div className="App">
//<Welcome />
//<BandList />
//</div>
//);
//}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
