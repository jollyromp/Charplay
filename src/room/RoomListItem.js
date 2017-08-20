import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class RoomList extends Component {
  render() {
    return(
      <li className={'room-'+this.props.value.url}>
        <Link to={'/room/'+this.props.value.url}>
          {this.props.value.name}
        </Link>
        <ul>
          <li>Url: {this.props.value.url}</li>
          <li>Description: {this.props.value.description}</li>
        </ul>
      </li>
    );
  }
}

export default RoomList;
