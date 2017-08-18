import React, { Component } from 'react';
var Remarkable = require('remarkable');
var md = new Remarkable();

class Message extends Component {
  render() {
    return (
      <li className='message' style={{borderBottom: this.props.value._character.color + ' 3px solid'}}>

        <div>
          <img alt={this.props.value._character.name + '-avatar'} src={this.props.value._character.avatar} height='100' />
          <h2>{this.props.value._character.name}</h2>
        </div>

        <div dangerouslySetInnerHTML={{__html:md.render(this.props.value.content)}} />
      </li>
    );
  }
}

export default Message;
