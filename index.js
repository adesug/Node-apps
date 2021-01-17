const http = require('http');
// const hallo = require('./hallo ade'); // <==mengimport
const moment = require('moment') // <==

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(moment(). calendar()); //<=cara pakai
    res.end();

});
    const hostname = '127.0.0.1'; //bisa juga localhost
    const port = 3000;
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);

    });