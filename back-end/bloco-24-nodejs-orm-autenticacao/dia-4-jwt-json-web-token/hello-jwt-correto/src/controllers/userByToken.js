const userBytoken = async (req, res) => {
    const user = req.user
    console.log(user)

    return res.status(200).json({ username: user.username, admin: user.admin })

}

module.exports = {
    userBytoken
}