import React, { Component } from 'react';
import environment from '../environment';

const {
  commitMutation,
  graphql,
} = require('react-relay');

const mutation = graphql`
mutation MessageFormContainerMutation(
  $content: String!,
  $author: String!,
  $room: String!,
  $character: String!
) {
  message(content: $content, _author: $author, _room: $room, _character: $character) {
    _id
  }
}
`;

class Room extends Component {
  constructor(props) {
    super(props);

    this.userId = '59988d2f5c222a4bdbae13e8';
    this.characterId = '599684a989ccdb4e64aedd38';

    this.state = {messageText: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let inputObject = {};
    inputObject[event.target.name] = event.target.value;
    this.setState(inputObject);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.handleSubmit(event);
    }
  }

  handleSubmit = (event) => {
    var message = {
      author: this.userId,
      character: this.characterId,
      room: this.props.roomId,
      content: this.state.messageText
    }

    this.setState({messageText: ''});
    this.sendMessageData(message);
    event.preventDefault();
  }

  sendMessageData = (message) => {  
    commitMutation(
      environment,
      {
        mutation,
        variables: message,
        onCompleted: (response) => {
          // Message Success
        },
        onError: err => console.error(err),
      },
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <textarea className='send' name='messageText' value={this.state.messageText} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
      </form>
    )
  }
}

export default Room;
