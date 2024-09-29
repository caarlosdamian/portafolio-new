"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Blog = new mongoose_1.default.Schema({
    title: {
        type: String,
        require,
    },
    content: {
        type: String,
        require,
    },
    userId: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: 'User',
        require,
    },
}, {
    timestamps: { createdAt: true },
});
exports.BlogModel = mongoose_1.default.model('Blog', Blog);
