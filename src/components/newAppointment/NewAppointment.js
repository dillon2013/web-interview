import React from 'react'

class NewAppointment extends React.PureComponent {
  componentDidMount () {

  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('submit form!')
  }

  render () {
    const {
      firstName,
      lastName,
      avatar,
    } = this.props;

    return (
      <div>
        <h1>New Appointment</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <div><img src={avatar} alt="avatar"/></div>
            <div>{firstName} {lastName}</div>
            <div>
              <button>Change</button>
            </div>
          </div>

          <div>
            <h3>Date & Time</h3>
          </div>

          <div>
            <h3>Notes</h3>
            <textarea cols="30" rows="10"></textarea>
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
