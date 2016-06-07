"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var decorators_1 = require('bap-node-microframework/decorators');
var core_1 = require('bap-node-microframework/core');
var PingController = (function (_super) {
    __extends(PingController, _super);
    function PingController() {
        _super.apply(this, arguments);
    }
    PingController.prototype.getAll = function (req, res) {
        res.json({
            ping: 'pong'
        });
    };
    __decorate([
        decorators_1.Get("/ping", { authenticated: false }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], PingController.prototype, "getAll", null);
    PingController = __decorate([
        decorators_1.WithRouter(), 
        __metadata('design:paramtypes', [])
    ], PingController);
    return PingController;
}(core_1.BaseController));
exports.PingController = PingController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PingController.router;
//# sourceMappingURL=PingController.js.map