"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.post('/create', users_controller_1.createUserHandler);
router.get('/', users_controller_1.getUsersHandler);
exports.default = router;
