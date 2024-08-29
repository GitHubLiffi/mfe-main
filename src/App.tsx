import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar } from '@npmtestliffi/learnstorybook-design-system-template';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the Parent MFE.</h1>
        <p>
          Here is a component imported from the Storybook library:
        </p>
        <Avatar username='New User' src='https://picsum.photos/200/300' size='large'/>
        <Avatar username='New User' src='https://picsum.photos/200/300' size='mediun'/>
        <Avatar username='New User' src='https://picsum.photos/200/300' size='small'/>
        <Avatar username='New User' src='https://picsum.photos/200/300' size='tiny'/>
      </header>
    </div>
  );
}

export default App;
