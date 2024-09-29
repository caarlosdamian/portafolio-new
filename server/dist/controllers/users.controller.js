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
exports.getUsersHandler = exports.createUserHandler = void 0;
const user_model_1 = require("../models/user.model");
const helpers_1 = require("../utils/helpers");
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // const result = validationResult(req);
    // if (!result.isEmpty()) return res.status(400).send(result.array());
    console.log(body);
    body.password = yield (0, helpers_1.hashPassword)(body.password);
    const newUser = new user_model_1.UserModel(body);
    try {
        const savedUser = yield newUser.save();
        res.status(201).send(savedUser);
    }
    catch (error) {
        res.sendStatus(400);
    }
});
exports.createUserHandler = createUserHandler;
const getUsersHandler = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.UserModel.find({});
        res.status(201).send(users);
    }
    catch (error) {
        res.sendStatus(400);
    }
});
exports.getUsersHandler = getUsersHandler;
