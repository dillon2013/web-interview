import React from 'react';
import { AppointmentItem } from '../appointmentItem/AppointmentItem';
import { API_ENDPOINT } from '../../config';

class Appointments extends React.PureComponent {
  state = {
    appointments: []
  }

  componentDidMount () {
    fetch(`${API_ENDPOINT}/appointments/?userId=123`)
      .then(res => res.json())
      .then((appointments) => {
        this.setState(() => ({appointments}))
      })
      .catch(() => {

      })
  }

  render() {
    const { appointments } = this.state;
    return (
      <div>
        <div className="breadcrumbs"><span>Clinical Records</span> <i className="fas fa-chevron-right" /> Appointments</div>
        <h1>Appointments</h1>
        <h3>Upcoming</h3>
        <ul className="appointment-list">
          { appointments.map(appointment => <AppointmentItem {...appointment} /> )}
        </ul>
      </div>
    )
  }
}

export {
  Appointments
}
