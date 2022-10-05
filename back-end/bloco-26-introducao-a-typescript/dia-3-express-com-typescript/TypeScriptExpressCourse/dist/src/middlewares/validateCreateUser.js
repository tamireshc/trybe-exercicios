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
const Joi = require('joi');
const userrSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.empty': 'namefield is missing',
        'string.min': 'name must be at least 3 characters',
    }),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(12).required(),
});
const createUserMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = userrSchema.validate(req.body);
    if (error) {
        return res.status(400).json(error.message);
    }
    next();
});
module.exports = { createUserMiddleware };
