import React from 'react';
import { shallow } from 'enzyme';
import {AvailableTime} from './AvailableTimeBtn';


describe('AvailableTime', () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      time: '2019-10-08T16:17:30.000Z',
      selectedTime: '2019-10-08T16:17:30.000Z',
      onSelected: jest.fn(),
    }
    wrapper = shallow(<AvailableTime {...props}/>)
  })

  it('should display the date in the correct format', () => {
    expect(wrapper.text()).toMatch(/17:17/)
  })

  it('should render "today" if the appointment date is today', () => {
    props.time = new Date();
    wrapper = shallow(<AvailableTime {...props}/>)
    expect(wrapper.text()).toMatch(/today/)
  })

  it('should have an "active class if the selectedTime matches the appointment time"', () => {
    expect(wrapper.hasClass('active')).toBeTruthy()
  })

  it('should call onSelected when clicked', () => {
    wrapper.simulate('click');
    expect(props.onSelected).toHaveBeenCalled()
  })
})
