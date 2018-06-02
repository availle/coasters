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
        }
    )

    it('should return the park wait times provided by park service', () => {
        parkServiceMock.getCoasters.resolves([{
            name: 'testName',
            waitTime: 3,
            shortName: 'test',
            unnecessaryProperty: 'abc'
        }])
        return coasterEndpoints.getCoasters(requestSpy, responseMock).then(() => {
            expect(responseMock.json).to.have.been.calledWith([{ name: 'testName', 'waitTime': 3 }])
        })
    })

    it('should return an error if there is an error', () => {
        parkServiceMock.getCoasters.rejects()
        return coasterEndpoints.getCoasters(requestSpy, responseMock).then(() => {
            expect(responseMock.sendStatus).to.have.been.calledWith(500)
        })
    })
})