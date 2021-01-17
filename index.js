const http = require('http');
// const hallo = require('./hallo ade'); // <==mengimport
const moment = require('moment') // <==

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write(moment(). calendar()); //<=cara pakai
    const url = req.url
    if (url === '/employee'){
        res.write('data employee');
    }else{
        res.write('data apa yang kamu perlukan?')
    }
    // res.write(JSON.stringify({
    //     'status' : 'success',
    //     'message' : 'respone success'
    // }));
    res.end();

});
    const hostname = '127.0.0.1'; //bisa juga localhost
    const port = 3000;
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);

    });