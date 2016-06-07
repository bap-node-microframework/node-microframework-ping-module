import { default as PingRouter } from "./PingController";
import { Module } from 'bap-node-microframework/core';

export class PingModule extends Module {
    registerControllers() {
        this.app.use(PingRouter);
    }
}
