"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthCheck_controller_1 = require("../controllers/healthCheck.controller");
const router = (0, express_1.Router)();
router.get('/', healthCheck_controller_1.getHealthCheckHandler);
router.get('/ping', healthCheck_controller_1.getPongHandler);
exports.default = router;
