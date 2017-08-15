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
    if (data.room) {
      this.setState({room: data.room});
    }
    
    if (data.messages) {
      var tempMessages = this.state.messages;
      tempMessages = tempMessages.concat(data.messages);
      this.setState({messages: tempMessages});
      console.log(data.messages);
      console.log(this.state.messages);
    }
  }

  render() {
    
    const messageList = this.state.messages.map((message) => <Message key={message._id} value={message} />);

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
        <img alt={props.value._character.name + '-avatar'} src={props.value._character.avatar} height='100' />
        <h2>{props.value._character.name}</h2>
      </div>

      <div>
        {props.value.content}
      </div>

    </div>
  );
}

export default App;
