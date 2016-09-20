import moment from 'moment'
import React from 'react'
import renderer from 'react-test-renderer'

import Time from '../../Time'


describe('<Time /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Time moment={moment(new Date())} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
