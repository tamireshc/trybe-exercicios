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
const connection_1 = __importDefault(require("./connection"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const [users] = yield connection_1.default.execute('SELECT * from TypeScriptExpress.Users');
    return users;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [user] = yield connection_1.default.execute('SELECT * from TypeScriptExpress.Users WHERE id =?', [id]);
    return user;
});
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const [user] = yield connection_1.default.execute('SELECT * from TypeScriptExpress.Users WHERE email =?', [email]);
    return user;
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const [{ insertId }] = yield connection_1.default.execute('INSERT INTO TypeScriptExpress.Users (name, email, password) VALUES(?,?,?)', [user.name, user.email, user.password]);
    return Object.assign({ id: insertId }, user);
});
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = user;
    yield connection_1.default.execute('UPDATE TypeScriptExpress.Users SET name=?, email=?, password=? WHERE id=?', [name, email, password, id]);
    return Object.assign({ id }, user);
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.execute('DELETE FROM TypeScriptExpress.Users WHERE id=?', [id]);
});
module.exports = {
    getAllUsers,
    getUser,
    createUser,
    getUserByEmail,
    updateUser,
    deleteUser,
};
