import React from 'react';
import { shallow } from 'enzyme';
import { Appointments } from './Appointments';
import { AppointmentItem } from '../appointmentItem/AppointmentItem';


describe('NewAppointment', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Appointments />)
    wrapper.setState({appointments: [
        {type: 'GP appointment', dateTime: '2019-01-16T12:14:00.000Z'},
        {type: 'Physio appointment', dateTime: '2019-01-10T15:15:00.000Z'},
      ]})
  })

  it('should render an AppointmentItem per appointmentItemm', () => {
    expect(wrapper.find(AppointmentItem).length).toBe(2)
  });

})
