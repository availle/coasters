export default class CoasterEndpoints {
    constructor(parkService) {
        this.parkService = parkService
        this.getCoasters = this.getCoasters.bind(this)
    }

    async getCoasters(req, res, next) {
        const coasters = await this.parkService.getCoasters()
        const coastersMappedForFrontend = coasters
            .filter(coaster => ( coaster.thrill > 0))
            .map(coaster => ({
            name: coaster.name,
            waitTime: coaster.waitTime,
            thrill: coaster.thrill
        }))

        res.json(coastersMappedForFrontend)
    }
}