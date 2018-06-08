import React from 'react';
import { shallow } from 'enzyme'

import CoasterPage from '../components/CoasterPage'

describe('<CoasterPage/>', function () {
    let coasterStoreMock

    beforeEach(() => {
        coasterStoreMock = {
            loading: false,
            coasters: [{ name: 'test', waitTime: 3, thrill: 4}],
            get: () => {
            }
        }
    })

    it('should display coasters', function () {
        const renderedCoasterPage = shallow(<CoasterPage coasterStore={coasterStoreMock}/>);

        expect(renderedCoasterPage).toMatchSnapshot()
    });

    it('should display "Loading..." if loading is true', () => {
        coasterStoreMock.loading = true
        const renderedCoasterPage = shallow(<CoasterPage coasterStore={coasterStoreMock}/>);
        expect(renderedCoasterPage.find('span').text()).toEqual('Loading...')
    })
});