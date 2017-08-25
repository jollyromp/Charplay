var moment = require('moment');

function getDateFromObjectId(data) {
  return new Date(parseInt(data.slice(0,8), 16)*1000);
}

function getRelativeTime(data) {
  return moment(data).fromNow();
}

export { getDateFromObjectId, getRelativeTime };