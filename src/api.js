import openSocket from 'socket.io-client';
const  io = openSocket('ws://dev.charplay.com:8000');

var moment = require('moment');

import { graphql } from 'relay-runtime';
graphql`query apiQuery{user(_id:"59988d2f5c222a4bdbae13e8"){username,password}}`;

function roomSubscribe(roomUrl, cb) {
  if (roomUrl) {
    io.on('sendRoomInfo', data => cb(null, data));
    io.emit('getRoom', roomUrl);
  }
}

function getRoomList(cb) {
  io.on('sendRoomList', data=> cb(null, data));
  io.emit('getRoomList');
}

function sendMessage(content) {
  io.emit('sendMessage', content);
}

function getDateFromObjectId(data) {
  return new Date(parseInt(data.slice(0,8), 16)*1000);
}

function getRelativeTime(data) {
  return moment(data).fromNow();
}

export { roomSubscribe, getRoomList, sendMessage, getDateFromObjectId, getRelativeTime };