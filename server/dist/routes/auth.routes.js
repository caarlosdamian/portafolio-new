"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post('/', (req, _res, next) => {
    console.log(req);
    next();
}, passport_1.default.authenticate('local'), auth_controller_1.authHandler);
router.get('/status', auth_controller_1.authStatus);
router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.json('Se deslogweo');
    });
});
exports.default = router;
