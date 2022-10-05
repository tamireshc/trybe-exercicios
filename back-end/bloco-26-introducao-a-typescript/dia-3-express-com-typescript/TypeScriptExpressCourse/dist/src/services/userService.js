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
const User_1 = __importDefault(require("../models/User"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.getAllUsers();
    return users;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.getUser(id);
    if (!user) {
        return { type: 'User_not_found', message: 'user not found' };
    }
    return { type: null, message: user[0] };
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const hasUser = yield User_1.default.getUserByEmail(user.email);
    console.log(hasUser);
    if (hasUser[0]) {
        return { type: 'User_alredy_exists', message: 'user alredy exists' };
    }
    const newUser = yield User_1.default.createUser(user);
    return { type: null, message: newUser };
});
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const userAtt = yield User_1.default.updateUser(id, user);
    return { type: null, message: userAtt };
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.default.deleteUser(id);
});
module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
