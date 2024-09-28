"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPongHandler = exports.getHealthCheckHandler = void 0;
const getHealthCheckHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('Server connected').status(200);
    }
    catch (error) {
        res.send({ message: 'Server not responding' }).status(404);
    }
});
exports.getHealthCheckHandler = getHealthCheckHandler;
const getPongHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('pong 🏓');
    }
    catch (error) {
        res.send('Sever error 🏓').status(404);
    }
});
exports.getPongHandler = getPongHandler;
