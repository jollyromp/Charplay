import React, { Component } from 'react';

import RoomListItem from './RoomListItem';

class RoomList extends Component {
  render() {
    return(
      <ul className='room-list'>
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
