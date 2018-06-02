export default class CoasterEndpoints {
    constructor(parkService) {
        this.parkService = parkService
        this.getCoasters = this.getCoasters.bind(this)
    }

    getCoasters(req, res, next) {
        console.log('getCoasters called')

        return this.parkService.getCoasters().then((coasters) => {
            return res.json(
                coasters.map(
                    coaster => ({
                        name: coaster.name,
                        waitTime: coaster.waitTime
                    })))
        }).catch(err => {
            res.sendStatus(500)
        })
    }
}