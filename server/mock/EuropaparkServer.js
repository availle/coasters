import express from 'express'

export default class EuropaparkServer {
    setup() {
        this.server = express()
        this.server.listen(3001)
        this.configureHelloWorldEndpoints()
        console.log('Europapark Mock Server started on port 3001')
    }

    configureHelloWorldEndpoints() {
        this.server.get('/api-5.4/pointsofinterest', (req, res) => {
            EuropaparkServer.sleep(1000).then(() => {
                res.json([
                    {
                        id: 35,
                        code: 2,
                        nameEnglish: 'Amazing KiddieRide',
                        active: true,
                        thrill: 0,
                        type: 1,
                        open: 1
                    },
                    {
                        id: 36,
                        code: 3,
                        nameEnglish: 'Great Watercooler',
                        active: true,
                        thrill: 3,
                        type: 1,
                        open: 1
                    },
                    {
                        id: 40,
                        code: 7,
                        nameEnglish: 'Superfast HyperCoaster',
                        active: true,
                        thrill: 5,
                        type: 1,
                        open: 1
                    },
                    {
                        id: 37,
                        code: 4,
                        nameEnglish: 'Some More Loops',
                        active: true,
                        thrill: 4,
                        type: 1,
                        open: 1
                    },
                    {
                        id: 38,
                        code: 5,
                        nameEnglish: 'First Coaster',
                        active: true,
                        thrill: 0,
                        type: 1,
                        open: 1
                    },
                    {
                        id: 39,
                        code: 6,
                        nameEnglish: 'Mega XTreme',
                        active: true,
                        thrill: 5,
                        type: 1,
                        open: 1
                    }])
            })
        })
        this.server.get('/api-5.4/waitingtimes', (req, res) => res.json([
            { time: 0, code: 2, type: 1, status: 0 },
            { time: 4, code: 3, type: 1, status: 0 },
            { time: 5, code: 4, type: 1, status: 0 },
            { time: 10, code: 5, type: 1, status: 0 },
            { time: 15, code: 7, type: 1, status: 0 },
            { time: 15, code: 6, type: 1, status: 0 },
        ]))
    }

    static sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
}
