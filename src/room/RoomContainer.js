import React, { Component } from 'react';

import { roomSubscribe, sendMessage } from '../api';
import Room from './Room';

class RoomContainer extends Component {
  constructor(props) {
    super(props);
    this.roomId = '59969db958f68a563e616dc4';
    this.userId = '0001';
    this.characterId = '599684a989ccdb4e64aedd38';
    this.state = {room: '', messages: [],
      messageText: ''};
    roomSubscribe(this.roomId, (err, data) => this.handleSocketData(err, data));
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSocketData = (err, data) => {
    if (data.room) {
      this.setState({room: data.room});
    }
    
    if (data.messages) {
      var tempMessages = this.state.messages;
      tempMessages = tempMessages.concat(data.messages);
      this.setState({messages: tempMessages});
    }
  }

  handleMessageChange = (content) => {
    this.setState({messageText: content});
  }

  handleKeyPress = (event) => {
    // Do not submit if Shift+Enter is pressed.
    if (event.key === 'Enter' && !event.shiftKey) {
      var message = {
        user: this.userId,
        character: this.characterId,
        room: this.roomId,
        text: this.state.messageText
      }
      this.sendMessageData(message);

      this.setState({messageText: ''});
      event.preventDefault();
    }
  }

  sendMessageData = (data) => {
    sendMessage(data);
  }

  render() {
    return (<Room handleMessageChange={this.handleMessageChange} handleKeyPress={this.handleKeyPress}
      room={this.state.room} messages={this.state.messages}
      messageText={this.state.messageText} />);
  }
}

export default RoomContainer;
