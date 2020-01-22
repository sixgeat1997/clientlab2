let net = require('net');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

let HOST = 'localhost';
let PORT = 6969;
let server = net.createServer();

server.listen(PORT, HOST);


 a = 0
// var id = true
server.on('connection', function (sock) {

    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function (data) {
        //    console.log('DATA ' + sock.remoteAddress + ': ' + data);
        //    sock.write('You said "' + data + '"');
        let x = 1

        if (data.length == 10) {
            sock.write("OK")
        }

        else if (+data != x) {
            sock.write("WRONG")
            a++
            console.log(a);

            // sock.destroy()
        }

        else if (+data == x) {
            sock.write("BINGO")
            console.log(+data)
            a = 0
        }

        else if(a === 5) {
            sock.end()
            console.log(a+"asdasdasdas")

        }

    });

    myEmitter.on('event', () => {
        console.log('an event occurred!')
    });

    myEmitter.emit('event');

    sock.on('close', function (data) {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort );
    });
});
