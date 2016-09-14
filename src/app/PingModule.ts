import { default as PingRouter } from "./PingController";
import { Module } from 'bap-node-microframework/core';
import { Container } from 'bap-node-microframework/core';

export class PingModule extends Module {
    constructor(app, io) {
        Container.setApplicationInstance(app.container);
        super(app, io);
    }

    registerControllers() {
        this.app.use(PingRouter);
    }
}
