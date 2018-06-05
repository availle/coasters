import CoasterStore from '../stores/CoasterStore'
import nock from 'nock'
import fetch from 'isomorphic-fetch'

describe('CoasterStore', () => {
    let store
    beforeEach(() => {
        store = new CoasterStore()
    })

    it('should get coasters from the backend and make them accessible', async () => {
        nock('http://localhost:3000')
            .get('/coasters')
            .reply(200,
                [
                    {
                        name: 'testName',
                        waitTime: 'testWaitTime'
                    }
                ])

        await store.get()

        expect(store.loading).toEqual(false)

        expect(store.coasters).toEqual([{
            name: 'testName',
            waitTime: 'testWaitTime'
        }])
    })
})