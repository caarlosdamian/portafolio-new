"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authStatus = exports.authHandler = void 0;
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
const authStatus = (req, res) => {
    try {
        req.user
            ? res.status(200).send(req.user)
            : res.status(401).send({ msg: 'Bad credentials' });
    }
    catch (error) {
        res.json(error);
    }
};
exports.authStatus = authStatus;
