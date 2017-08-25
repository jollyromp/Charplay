import React, { Component } from 'react';
import environment from '../environment';

import Room from './Room';

const {
  QueryRenderer,
  graphql,
} = require('react-relay');

class RoomContainer extends Component {
  constructor(props) {
    super(props);
    this.url = props.match.params.url;
    this.userId = '59988d2f5c222a4bdbae13e8';
    this.characterId = '599684a989ccdb4e64aedd38';
    this.state = {room: '', messages: [],
      messageText: ''};
    //roomSubscribe(this.url, (err, data) => this.handleSocketData(err, data));
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
        room: this.state.room._id,
        text: this.state.messageText
      }
      this.sendMessageData(message);
      this.setState({messageText: ''});
      event.preventDefault();
    }
  }

  sendMessageData = (data) => {
    //sendMessage(data);
  }

  render() {
    return (
      <QueryRenderer
      environment={environment}
      query={graphql`
        query RoomContainerQuery($roomUrl: String!) {
          room(url: $roomUrl) {
            _id,
            url,
            description,
            name
          }
        }
      `}
      variables={{
        roomUrl: this.props.match.params.url,
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <Room handleMessageChange={this.handleMessageChange} handleKeyPress={this.handleKeyPress}
            room={props.room[0]} messageText={this.state.messageText} />;
        }
        return <div>Loading</div>;
      }}
    />
    );
  }
}

export default RoomContainer;
