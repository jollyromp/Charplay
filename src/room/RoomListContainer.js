import React, { Component } from 'react';
import environment from '../environment';

import RoomList from './RoomList';

const {
  QueryRenderer,
  graphql,
} = require('react-relay');

class RoomListContainer extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query RoomListContainerQuery {
              room {
                _id,
                url,
                description,
                name
              }
            }
          `}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <RoomList roomList={props.room} />;
            }
            return <div>Loading</div>;
          }}
        />
        
      </div>
    );
  }
}

export default RoomListContainer;
