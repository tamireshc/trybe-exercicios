const { Account, Profile, Comment } = require('../models');

const getById = async (id) => {
    const account = await Account.findOne({
        where: { id },
        include: [{ model: Profile, as: 'Profiles' }],
    });
    if (!account) {
        return { type: 'NOT_FOUND', message: 'account not found' };
    }
    return { type: null, message: account };
};

const getByIdWithoutProfile = async (id) => {
    const account = await Account.findByPk(id);
    if (!account) {
        return { type: 'NOT_FOUND', message: 'account not found' };
    }
    return { type: null, message: account };
};

const listCommentsByAccountId = async (accountId) => {
    const account = await Account.findByPk(accountId);
    if (!account) {
        return { type: 'NOT_FOUND', message: 'account not found' };
    }
    const comments = await Comment.findAll({
        where: { accountId },
    });

    return { type: null, message: comments };
};

const createAccount = async (email, password, firstName, lastName, phone) => {
    const newAccount = await Account.create({ email, password });
    console.log(newAccount.dataValues.id);
    const accountId = newAccount.dataValues.id;

    await Profile.create({ firstName, lastName, phone, accountId });

    return { type: null, message: newAccount };
};

const createComment = async (message, upvoting, downvoting, accountId) => {
    const account = await Account.findByPk(accountId);
    if (!account) {
        return { type: 'NOT_FOUND', message: 'account not found' };
    }

    const result = await Comment.create({ message, upvoting, downvoting, accountId });
    return { type: null, messagex: result };
};

module.exports = {
    getById,
    getByIdWithoutProfile,
    listCommentsByAccountId,
    createAccount,
    createComment,
};