import React, { Component } from 'react';

import MessageList from './MessageList';

class MessageListContainer extends Component {
  render() {
    return (
      <MessageList messages={this.props.messages} />
    );
  }
}

export default MessageListContainer;
