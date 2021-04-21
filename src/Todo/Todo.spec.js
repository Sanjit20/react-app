import React from 'react';
import { shallow } from 'enzyme'

import Todo from './index'

describe('Todo', () => {
  it('should render input', () => {
    const wrapper = shallow(<Todo/>)

    expect(wrapper.find('input')).toBeTruthy()
  })

  it('should render button', () => {
    const wrapper = shallow(<Todo/>)

    expect(wrapper.find('button')).toBeTruthy()
  })

  it('should render button label text', () => {
    const wrapper = shallow(<Todo/>)

    expect(wrapper.find('button').prop('children')).toBe('Add todo')
  })

  it('should render entered value', () => {
    const wrapper = shallow(<Todo/>)

    wrapper.find('input').simulate('change', {target: {value: 'Test'}})
    wrapper.find('button').simulate('click');

    expect(wrapper.find('div').prop('children')).toBe('Test')
  })

  it('should render multiple input values', () => {
    const wrapper = shallow(<Todo/>)

    wrapper.find('input').simulate('change', {target: {value: 'Read book'}})
    wrapper.find('button').simulate('click');

    wrapper.find('input').simulate('change', {target: {value: 'Watch movie'}})
    wrapper.find('button').simulate('click');

    expect(wrapper.find('div').at(0).prop('children')).toBe('Read book')
    expect(wrapper.find('div').at(1).prop('children')).toBe('Watch movie')
  })
})
