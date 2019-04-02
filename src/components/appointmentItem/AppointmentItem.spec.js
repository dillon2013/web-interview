import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentItem } from './AppointmentItem'


describe('AppointmentItem', () => {

  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      type: 'GP appointment',
      dateTime: '2019-10-08T16:17:30.000Z'
    }
    wrapper = shallow(<AppointmentItem {...props}/>)
  })

  it('should display the date in the correct format', () => {
    expect(wrapper.find('.appointment-time').text()).toMatch(/17:17 PM/)
  })

  it('should render type', () => {
    expect(wrapper.find('strong').text()).toBe('GP appointment')
  })

})
