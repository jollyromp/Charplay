import React, { Component } from 'react';

import { roomSubscribe } from '../api';
import Room from './Room';

class RoomContainer extends Component {
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
    }
  }

  render() {
    return (<Room room={this.state.room} messages={this.state.messages} />);
  }
}

export default RoomContainer;
