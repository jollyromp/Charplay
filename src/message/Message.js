import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <li className='message' style={{borderBottom: this.props.value._character.color + ' 3px solid'}}>

        <div>
          <img alt={this.props.value._character.name + '-avatar'} src={this.props.value._character.avatar} height='100' />
          <h2>{this.props.value._character.name}</h2>
        </div>

        <div>
          {this.props.value.content}
        </div>

      </li>
    );
  }
}

export default Message;
