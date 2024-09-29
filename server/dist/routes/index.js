"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthCheck_routes_1 = __importDefault(require("./healthCheck.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = express_1.default.Router();
router.use('/health', healthCheck_routes_1.default);
router.use('/users', users_routes_1.default);
router.use('/auth', auth_routes_1.default);
exports.default = router;
