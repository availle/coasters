import React from 'react'
import { shallow } from 'enzyme'

import Coaster from '../components/Coaster'

describe('<Coaster/>', () => {
    let renderedCoaster

    beforeEach(() => {
        renderedCoaster = shallow(<Coaster name='test' waitTime={3}/>)
    })

    it('should render a name', () => {
        expect(renderedCoaster.find('.coaster-name').text()).toEqual('test')
    });

    it('should render a wait time', () => {
        renderedCoaster = shallow(<Coaster name='test' waitTime={3}/>)
        expect(renderedCoaster.find('.coaster-time').text()).toEqual('3')
    });

    it('should render thrill', () => {
        renderedCoaster = shallow(<Coaster name='test' waitTime={3} thrill={4}/>)
        expect(renderedCoaster.find('.coaster-thrill').text()).toEqual('4')
    })
});