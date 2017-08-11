import React, { Component } from 'react';
import './App.css';

import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }

  render() {

    const example = require('./example.json');
    const currentRoom = example.rooms[0];

    const messageList = example.messages.map((message) => <Message key={message.ID} value={message} />);

    return (
      <div>
        {this.state.timestamp}
        <div className='room-information'>
          <h1>{currentRoom.name}</h1>
          <div>{currentRoom.description}</div>
        </div>

        <div className='messages'>
          {messageList}
        </div>

      </div>
    );
  }
}

function Message(props) {
  return (
    <div className='message' style={{color: props.value.characterColor}}>

      <div>
        <img alt={props.value.characterName + '-avatar'} src={props.value.characterAvatar} height='100' />
        <h2>{props.value.characterName}</h2>
      </div>

      <div>
        {props.value.content}
      </div>

    </div>
  );
}

export default App;
