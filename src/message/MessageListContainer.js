import React, { Component } from 'react';
import environment from '../environment';

import MessageList from './MessageList';

const {
  QueryRenderer,
  graphql,
} = require('react-relay');

class MessageListContainer extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MessageListContainerQuery($roomId: String!) {
            message(_room: $roomId) {
              _id,
              _author{
                username,
                tag
              },
              _character{
                _id,
                name,
                color,
                avatar
              },
              _room{
                _id,
                url,
                description,
                name 
              },
              content
            }
          }
        `}
        variables={{
          roomId: this.props.roomId,
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <MessageList messages={props.message} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default MessageListContainer;
