import React, { Component } from 'react';

import MessageListContainer from '../message/MessageListContainer';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {sendContent: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange = (event) => {
    this.setState({sendContent: event.target.value});
  }

  handleKeyPress = (event) => {
    // Do not submit if Shift+Enter is pressed.
    if (event.key === 'Enter' && !event.shiftKey) {
      var message = this.state.sendContent;
      this.setState({sendContent: ''});
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <div className='room-information'>
          <h1>{this.props.room.name}</h1>
          <div>{this.props.room.description}</div>
        </div>

        <textarea className='send' name='send' value={this.state.sendContent} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        
        <MessageListContainer messages={this.props.messages} />
      </div>
    )
  }
}

export default Room;
