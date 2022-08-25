const errorHandler = (error, req, res, next) => {
    const { status, message } = error;
    res.status(status || 500).json({ message });
}

module.exports = errorHandler;
