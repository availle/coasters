import ExpressServer from './ExpressServer'
import CoasterEndpoints from '../CoasterEndpoints'
import EuropaparkServer from '../../mock/EuropaparkServer'
import ParkService from '../external/ParkService'

export default class Application {
    static create() {
        const mockServer = new EuropaparkServer()
        mockServer.setup()
        const express = new ExpressServer(new CoasterEndpoints(new ParkService()));
        express.setup();
    }
}
