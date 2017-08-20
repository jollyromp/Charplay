import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import RoomListContainer from './room/RoomListContainer';
import RoomContainer from './room/RoomContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={RoomListContainer}/>
          <Route path='/room/:url' component={RoomContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
