"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouteMiddleware = void 0;
const protectedRouteMiddleware = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({ msg: 'Bad credentials' });
    }
    else {
        next();
    }
};
exports.protectedRouteMiddleware = protectedRouteMiddleware;
