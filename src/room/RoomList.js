import React, { Component } from 'react';

import RoomListItem from './RoomListItem';

import { getRelativeTime, getDateFromObjectId } from '../api';

class RoomList extends Component {
  render() {
    return(
      <ul className='room-list'>
      {getRelativeTime(getDateFromObjectId("599684a989ccdb4e64aedd38"))}
      {this.props.roomList.map(function(room) {
        return (
          <RoomListItem key={room._id} value={room} />
        );
      })}
    </ul>
    );
  }
}

export default RoomList;
