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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const userService_1 = __importDefault(require("../services/userService"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService_1.default.getAllUsers();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { type, message } = yield userService_1.default.getUser(Number(id));
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const { type, message } = yield userService_1.default.createUser(user);
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    try {
        const { type, message } = yield userService_1.default.updateUser(Number(id), user);
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield userService_1.default.deleteUser(Number(id));
        return res.status(200).json('user was delete');
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
