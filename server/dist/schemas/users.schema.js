"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserschema = void 0;
const zod_1 = require("zod");
exports.createUserschema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        username: (0, zod_1.string)({
            required_error: 'First name is required',
        }),
        password: (0, zod_1.string)({
            required_error: 'Password is required',
        }).min(6, 'Password is to shoord - should be min 6 chard'),
        email: (0, zod_1.string)({
            required_error: 'Email is required',
        }).email('Not a valid email'),
    }),
});
