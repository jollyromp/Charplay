import React, { Component } from 'react';
import './App.css';

import { roomSubscribe } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {room: '', messages: []};
    roomSubscribe((err, data) => this.handleSocketData(err, data));
  }

  handleSocketData = (err, data) => {
    console.log(data);

    if (data.room) {
      this.setState({room: data.room});
    }
    
    if (data.messages) {
      var tempMessages = this.state.messages;
      tempMessages = tempMessages.push(data.messages);
      this.setState({messages: tempMessages});
    }
  }

  render() {

    const example = require('./example.json');

    const messageList = example.messages.map((message) => <Message key={message.ID} value={message} />);

    return (
      <div>
        <div className='room-information'>
          <h1>{this.state.room.name}</h1>
          <div>{this.state.room.description}</div>
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
