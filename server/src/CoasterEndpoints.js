export default class CoasterEndpoints {
    constructor(parkService) {
        this.parkService = parkService
        this.getCoasters = this.getCoasters.bind(this)
    }

    async getCoasters(req, res, next) {
        const coasters = await this.parkService.getCoasters()
        const coastersMappedForFrontend = coasters.map(coaster => ({
            name: coaster.name,
            waitTime: coaster.waitTime
        }))

        res.json(coastersMappedForFrontend)
    }
}