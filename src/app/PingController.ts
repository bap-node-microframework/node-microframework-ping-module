import { Get, WithRouter } from 'bap-node-microframework/decorators';
import { BaseController } from 'bap-node-microframework/core';

@WithRouter()
export class PingController extends BaseController {
    @Get("/ping", { authenticated: false })
    getAll(req, res) {
        res.json({
            ping: 'pong'
        });
    }
}

export default PingController.router;
