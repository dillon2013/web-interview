import React from 'react';
import moment from 'moment';

const AvailableTime = ({selectedTime, time, onSelected}) => (
  <button
    type="button"
    className={`available-time${selectedTime === time ? ' active': ''}`}
    name="availableTime"
    onClick={() => onSelected(time)}
  >
    {isToday(time) && 'today'} {formatTime(time)}
  </button>
)

export {
  AvailableTime
}

function formatTime (time) {
  return moment(time).format('HH:mm')
}

function isToday (date) {
  const today = new Date();
  const sameDay = moment(today).isSame(date, 'day')
  return sameDay;
}
