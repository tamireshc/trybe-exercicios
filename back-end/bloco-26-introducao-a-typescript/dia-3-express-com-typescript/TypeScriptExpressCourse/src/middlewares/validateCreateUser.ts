
const Joi = require('joi');

import { Request, Response, NextFunction } from 'express';

const userrSchema = Joi.object({
	name:Joi.string().min(3).required().messages({
        'string.empty':'namefield is missing',
        'string.min':'name must be at least 3 characters',
    }),

    email:Joi.string().email().required(),

	password:Joi.string().min(6).max(12).required(),
});

const createUserMiddleware = async (req:Request, res:Response, next:NextFunction) =>{
	const {error}= userrSchema.validate(req.body)
if(error) {
	return res.status(400).json(error.message)
}
	next()
};

export = { createUserMiddleware }
