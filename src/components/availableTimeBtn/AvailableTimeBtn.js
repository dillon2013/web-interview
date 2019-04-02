import React from 'react';
import { formatTime, isToday } from '../../utils/dateUtils'

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
