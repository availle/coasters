import sinon from 'sinon'
import { expect } from 'chai'

import CoasterEndpoints from '../src/CoasterEndpoints'

describe('CoasterEndpoints', () => {
    let parkServiceMock
    let coasterEndpoints
    let responseMock
    let requestSpy

    beforeEach(() => {
            parkServiceMock = {
                getCoasters: sinon.stub()
            }
            responseMock = {
                json: sinon.stub().resolves(),
                sendStatus: sinon.stub().resolves()
            }

            requestSpy = {}
            coasterEndpoints = new CoasterEndpoints(parkServiceMock)

        parkServiceMock.getCoasters.resolves([{
            name: 'testName',
            waitTime: 3,
            shortName: 'test',
            unnecessaryProperty: 'abc',
            thrill: 1
        }])
        }
    )

    it('should send the name of a coaster to the frontend', async () => {
        await coasterEndpoints.getCoasters(requestSpy, responseMock)
        const informationSentToFrontend = responseMock.json.getCall(0).args[0]

        expect(informationSentToFrontend[0].name).to.equal('testName')
    })

    it('should send the wait time of a coaster to the frontend', async () => {
        await coasterEndpoints.getCoasters(requestSpy, responseMock)
        const informationSentToFrontend = responseMock.json.getCall(0).args[0]

        expect(informationSentToFrontend[0].waitTime).to.equal(3)
    })
})