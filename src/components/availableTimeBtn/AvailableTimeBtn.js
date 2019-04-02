import React from 'react';
import { formatTime, isToday } from '../../utils/dateUtils';
import PropTypes from 'prop-types';

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

AvailableTime.proptypes = {
  selectedTime: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
}

export {
  AvailableTime
}
