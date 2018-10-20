
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'textplain'});
    res.end('Ahora si bro');
}).listen(port, hostname, () => {
    console.log(`servidor corriendo en el puerto ${port}` + port);

})

