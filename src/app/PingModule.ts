import { default as PingRouter } from "./PingController";
import { Module } from 'bap-node-microframework/core';
import { Container } from 'bap-node-microframework/core';

export class PingModule extends Module {
    constructor(app, io, container) {
        container.registerService('router', container.get("router"));
        Container.setApplicationInstance(container);
        super(app, io);
    }

    registerControllers() {
        this.app.use(PingRouter);
    }
}
