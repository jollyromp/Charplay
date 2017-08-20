import React, { Component } from 'react';

import Room from './Room';
import { roomSubscribe, sendMessage } from '../api';

class RoomContainer extends Component {
  constructor(props) {
    super(props);
    this.url = props.match.params.url;
    this.userId = '59988d2f5c222a4bdbae13e8';
    this.characterId = '599684a989ccdb4e64aedd38';
    this.state = {room: '', messages: [],
      messageText: ''};
    roomSubscribe(this.url, (err, data) => this.handleSocketData(err, data));
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSocketData = (err, data) => {
    if (this.refs.checkMount) {
      if (data.room) {
        this.setState({room: data.room});
      }
      
      if (data.messages) {
        var tempMessages = this.state.messages;
        tempMessages = tempMessages.concat(data.messages);
        this.setState({messages: tempMessages});
      }
    }
  }

  handleMessageChange = (content) => {
    if (this.refs.checkMount) {
      this.setState({messageText: content});
    }
  }

  handleKeyPress = (event) => {
    if (this.refs.checkMount) {
      // Do not submit if Shift+Enter is pressed.
      if (event.key === 'Enter' && !event.shiftKey) {
        var message = {
          user: this.userId,
          character: this.characterId,
          room: this.state.room._id,
          text: this.state.messageText
        }
        this.sendMessageData(message);
        this.setState({messageText: ''});
        event.preventDefault();
      }
    }
  }

  sendMessageData = (data) => {
    sendMessage(data);
  }

  render() {
    return (<Room ref='checkMount' handleMessageChange={this.handleMessageChange} handleKeyPress={this.handleKeyPress}
      room={this.state.room} messages={this.state.messages}
      messageText={this.state.messageText} />);
  }
}

export default RoomContainer;
