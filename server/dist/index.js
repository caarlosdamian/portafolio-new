"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const connectDb_1 = require("./utils/connectDb");
const dotenv = __importStar(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importStar(require("express-session"));
require("./strategies/local-strategy");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SECRET || '',
    saveUninitialized: false,
    resave: false,
    store: new express_session_1.MemoryStore({}),
    cookie: {
        secure: false, // Set true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 // Session expiration time in milliseconds (1 day here)
    }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session()); // attaching user prop to session
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
    (0, connectDb_1.connectDb)();
});
