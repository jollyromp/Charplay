import React, { Component } from 'react';

import RoomList from './RoomList';
import { getRoomList } from '../api';

class RoomListContainer extends Component {
  constructor(props) {
    super(props);
    getRoomList((err, data) => this.handleRoomList(err, data));
    this.state = {'roomId': '', 'roomList': []};
  }
  
  handleRoomList = (err, data) => {
    this.setState({'roomList': data});
  }

  render() {
    return (
      <RoomList roomList={this.state.roomList} />
    );
  }
}

export default RoomListContainer;
