import React, { Component } from 'react';

import MessageListContainer from '../message/MessageListContainer';

class Room extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange = (event) => {
    this.props.handleMessageChange(event.target.value);
  }

  handleKeyPress = (event) => {
    this.props.handleKeyPress(event);
  }

  render() {
    return (
      <div>
        <div className='room-information'>
          <h1>{this.props.room.name}</h1>
          <div>{this.props.room.description}</div>
        </div>

        <textarea className='send' name='send' value={this.props.messageText} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        
        <MessageListContainer roomId={this.props.room._id} />
      </div>
    )
  }
}

export default Room;
