import React from 'react';
import { shallow } from 'enzyme';
import { NewAppointment } from './NewAppointment';
import { AvailableTime } from '../availableTimeBtn/AvailableTimeBtn'


describe('NewAppointment', () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      user: {
        firstName: 'Dillon',
        lastName: 'Lee',
        avatar: '/foo.jpg'
      }
    }
    wrapper = shallow(<NewAppointment {...props}/>)
    wrapper.setState({availableTimes: [
        "2019-11-27T10:11:00.000Z",
        "2019-12-27T11:12:30.000Z",
      ]})
  })

  it('should display the full user name', () => {
    expect(wrapper.find('.user-row div').at(1).text()).toMatch(/Dillon Lee/)
  })

  it('should render an AvailableTime per availableTime', () => {
    expect(wrapper.find(AvailableTime).length).toBe(2)
  });

  it('should use the avatar as the src for the image', () => {
    expect(wrapper.find('.user-row img').prop('src')).toEqual('/foo.jpg')
  })

  it('should call postBooking when the form has been filled in', () => {
    const instance = wrapper.instance();
    instance.postBooking = jest.fn();
    wrapper.setState({
      selectedTime: "2019-11-27T10:11:00.000Z",
      notes: 'foo bar foo'
    })
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {
      }
    });

    expect(instance.postBooking).toHaveBeenCalledWith('2019-11-27T10:11:00.000Z', 'foo bar foo')
  })

  it('should reset the state after the form has been submitted', () => {
    const instance = wrapper.instance();
    instance.resetForm = jest.fn();
    wrapper.setState({
      selectedTime: "2019-11-27T10:11:00.000Z",
      notes: 'foo bar foo'
    })
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(instance.resetForm).toHaveBeenCalled()
  })

})
