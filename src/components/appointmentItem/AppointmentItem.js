import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function AppointmentItem({type, dateTime}) {
  return (
    <li>
      <div></div>
      <div>
        <p><strong>{type}</strong></p>
        <p className="appointment-time">{moment(dateTime).format('HH:mm A')}</p>
      </div>
      <div>
        <i className="fas fa-chevron-right" />
      </div>
    </li>
  )
}

AppointmentItem.propTypes = {
  type: PropTypes.string,
  dateTime: PropTypes.string
}

export {
  AppointmentItem,
}
