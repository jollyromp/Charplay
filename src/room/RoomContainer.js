import React, { Component } from 'react';
import environment from '../environment';

import Room from './Room';

const {
  QueryRenderer,
  graphql,
} = require('react-relay');

class RoomContainer extends Component {
  render() {
    console.log(environment);
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
          return <Room room={props.room[0]} />;
        }
        return <div>Loading</div>;
      }}
    />
    );
  }
}

export default RoomContainer;
