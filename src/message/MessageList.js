import React, { Component } from 'react';

import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <ul className='messages'>
        {this.props.messages.map(function(message) {
          return (
            <Message key={message._id} value={message} />
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
