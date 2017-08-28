import React, { Component } from 'react';

import MessageListContainer from '../message/MessageListContainer';
import MessageFormContainer from '../messageform/MessageFormContainer';

class Room extends Component {
  render() {
    return (
      <div>
        <div className='room-information'>
          <h1>{this.props.room.name}</h1>
          <div>{this.props.room.description}</div>
        </div>
        <MessageFormContainer roomId={this.props.room._id} />
        <MessageListContainer roomId={this.props.room._id} />
      </div>
    )
  }
}

export default Room;
