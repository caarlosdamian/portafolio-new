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
exports.authLogoutHandler = exports.authStatusHandler = exports.authHandler = void 0;
const authHandler = (req, res) => {
    try {
        res.status(200).send(req.user);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        console.log(error);
    }
};
exports.authHandler = authHandler;
const authStatusHandler = (req, res) => {
    try {
        req.user
            ? res.status(200).send(req.user)
            : res.status(401).send({ msg: 'Bad credentials' });
    }
    catch (error) {
        res.json(error);
    }
};
exports.authStatusHandler = authStatusHandler;
const authLogoutHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user)
            res.sendStatus(401);
        req.logout(function (err) {
            if (err) {
                next(err);
            }
            res.json({ message: 'Succesfully logout' });
        });
        res.json({ message: 'Succesfully logout' });
    }
    catch (error) {
        res.json({ message: error }).sendStatus(400);
    }
});
exports.authLogoutHandler = authLogoutHandler;
