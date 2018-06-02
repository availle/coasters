import * as themeparks from 'themeparks'

export default class ParkService {
    async getCoasters() {
        const ep = new themeparks.Parks.EuropaPark({ api_base: 'http://localhost:3001/' })
        return await ep.GetWaitTimes()
    }
}