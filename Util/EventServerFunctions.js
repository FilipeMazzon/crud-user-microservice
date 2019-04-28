const {isNumber} = require('./DataCriticism');
function EventServerFunctions() {
}

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = addr => {
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : +addr.port;
    console.log(`server listening in port:${bind} on worker :${process.pid}`);
};

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('the port is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

EventServerFunctions.prototype = {
    normalizePort,
    onListening,
    onError
};

module.exports = new EventServerFunctions();