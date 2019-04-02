import React from 'react';
import { API_ENDPOINT } from '../../config';
import { AvailableTime } from '../availableTimeBtn/AvailableTimeBtn'

class NewAppointment extends React.PureComponent {
  state = {
    availableTimes: [],
    selectedTime: undefined
  }

  componentDidMount () {
    this.fetchAvailableTimes();
  }

  fetchAvailableTimes = () => {
    fetch(`${API_ENDPOINT}/availableSlots`)
      .then(res => res.json())
      .then((availableTimes) => {
        this.setState(() => ({availableTimes}))
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit form!', this.state.selectedTime, this.state.notes)
    const { selectedTime, notes }  =this.state;
    this.postBooking(selectedTime, notes);
    this.resetForm();
  }

  onChange = (e) => {
    this.setState({notes: e.target.value})
  }

  onSelectTime = (time) => {
    this.setState({selectedTime: time})
  }

  resetForm = () => {
    this.setState(() => ({
      selectedTime: '',
      notes: '',
    }))
  }

  postBooking = (selectedTime, notes) => {
    console.log('posted');
    fetch(`${API_ENDPOINT}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 123,
        dateTime: selectedTime,
        notes,
        type: 'GP appointment',
      })
    });
  }


  render () {
    const {
      user: {
        firstName,
        lastName,
        avatar,
      }
    } = this.props;

    const { availableTimes, selectedTime, notes } = this.state;

    return (
      <div>
        <h1>New Appointment</h1>

        <form onSubmit={this.onSubmit}>
          <div className="user-row">
            <div><img width="50" height="50" src={avatar} alt="avatar"/></div>
            <div>{firstName} {lastName}</div>
            <div>
              <button className="change-btn">Change</button>
            </div>
          </div>

          <div className="date-row">
            <div>
              <i className="far fa-clock" />
            </div>
            <div>
              <h3> Date & Time</h3>
              <div>
                { availableTimes.map(time => (
                  <AvailableTime onSelected={this.onSelectTime} selectedTime={selectedTime} time={time} />
                ))}
              </div>
            </div>
          </div>

          <div className="notes-row">
            <div>
              <i className="far fa-sticky-note" />
            </div>
            <div>
              <h3>Notes</h3>
              <textarea
                value={notes}
                onChange={this.onChange}
                name="notes"
                cols="30"
                rows="10" />
            </div>
          </div>
          <input type="submit" value="Book"/>
        </form>

      </div>
    )
  }
}

export {
  NewAppointment
}
