"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usercontroller_1 = __importDefault(require("../controllers/usercontroller"));
const validateCreateUser_1 = __importDefault(require("../middlewares/validateCreateUser"));
const router = (0, express_1.Router)();
router.get('/', usercontroller_1.default.getAllUsers);
router.get('/:id', usercontroller_1.default.getUser);
router.post('/', validateCreateUser_1.default.createUserMiddleware, usercontroller_1.default.createUser);
router.put('/:id', validateCreateUser_1.default.createUserMiddleware, usercontroller_1.default.updateUser);
router.delete('/:id', usercontroller_1.default.deleteUser);
exports.default = router;
