const acountService = require('../services/accounts.service');

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const { type, message } = await acountService.getById(Number(id));
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getByIdWithoutProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const { type, message } = await acountService.getByIdWithoutProfile(Number(id));
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const listCommentsByAccountId = async (req, res) => {
    const { id } = req.params;
    try {
        const { type, message } = await acountService.listCommentsByAccountId(Number(id));
        if (type) {
            return res.status(400).json(message);
        }
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const createAccount = async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;
    try {
        const { message } = await acountService.createAccount(email, password,
            firstName, lastName, phone);
        return res.status(201).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const createComment = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
        const { messagex } = await acountService.createComment(message, 0, 0, Number(id));
        return res.status(201).json(messagex);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
module.exports = {
    getById,
    getByIdWithoutProfile,
    listCommentsByAccountId,
    createAccount,
    createComment,
};