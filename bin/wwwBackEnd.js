const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = require('../app');

const {normalizePort, onError, onListening} = require('../Util/EventServerFunctions');
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);
if (cluster.isMaster) {
    console.log(`this is the master process: ${process.pid}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', () => { //if want you recieve the work has died here
        console.log(`worker process ${process.pid} had died`);
        cluster.fork();
    })
} else {
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', onError);
    server.on('listening', () => {
        onListening(server.address())
    });
}