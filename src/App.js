import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const example = require('./example.json');

    const messageList = example.messages.map((message) => <Message key={message.ID} value={message} />);

    return (
      <div>
        {messageList}
      </div>
    );
  }
}

function Message(props) {
  return (
    <div class='message' style={{color: props.value.characterColor}}>
      <div>
        <img alt={props.value.characterName + '-avatar'} src={props.value.characterAvatar} height='100' />
        <h2>{props.value.characterName}</h2>
      </div>
      <div>
        {props.value.content}
      </div>
    </div>
  );
}

export default App;
