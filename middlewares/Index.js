function Middleware() {
}

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(404)
        .send({message: "The page you are looking for was not found."});
    next();
};


Middleware.prototype = {
    errorHandler
};

//singleton
module.exports = new Middleware;