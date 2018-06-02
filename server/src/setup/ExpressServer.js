import express from 'express'

export default class ExpressServer {
    constructor(coasterEndpoints) {
        this.coasterEndpoints = coasterEndpoints
    }
    setup() {
        this.server = express()
        this.configureHelloWorldEndpoints()
        this.configureFrontend()
        this.server.listen(3000)
        console.log('Server started on port 3000')
    }

    configureHelloWorldEndpoints() {
        this.server.get('/coasters', this.coasterEndpoints.getCoasters)
    }

    configureFrontend() {
        this.server.use(express.static('frontend/build'))
    }
}
