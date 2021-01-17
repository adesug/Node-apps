const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader='Content-Type', 'text/plain';
    res.write('Hallo Ade ');
    res.end();

}).listen(3000)