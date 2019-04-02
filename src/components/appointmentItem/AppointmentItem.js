import React from 'react';
import moment from 'moment';

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

export {
  AppointmentItem,
}
