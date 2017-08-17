import React, { Component } from 'react';
import './App.css';

import RoomContainer from './room/RoomContainer'

class App extends Component {
  render() {
    return (
      <div>
        <RoomContainer name='test' />
      </div>
    );
  }
}

export default App;
