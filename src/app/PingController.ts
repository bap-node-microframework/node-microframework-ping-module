import { Get, WithRouter } from 'bap-node-microframework/decorators';
import { BaseControllerMongoose } from 'bap-node-microframework-mongoose';

@WithRouter()
export class PingController extends BaseControllerMongoose {
    @Get("/ping", { authenticated: false })
    getAll(req, res) {
        res.json({
            ping: 'pong'
        });
    }
}

export default PingController.router;
