import React from 'react';
import logo from './logo.svg';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'Name1',
    members: 'Name1',
    formed: 'Name1',
  },
  {
    name: 'Name2',
    members: 'Name2',
    formed: 'Name2',
  },
  {
    name: 'Name3',
    members: 'Name3',
    formed: 'Name3',
  },
];

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

class Band extends React.Component {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      <Band {...bandNames[0]} />
      <Band {...bandNames[1]} />
      <Band {...bandNames[2]} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
