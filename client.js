let net = require("net")

let HOST = "localhost"
let PORT = 6969

let client = new net.Socket()

client.connect(PORT, HOST, () => {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write("5935512038")


})

client.on("data", (data) => {
    let x = Math.floor(Math.random() * 10);
    if (data == "OK") {
        console.log("OK");
        client.write("" + x)
    }

    if (data == "WRONG") {
        console.log("WRONG");
        client.write("" + x)
        console.log(+x);
    }

    if (data == "BINGO") {
        console.log("BINGO");
        client.destroy()

    }

})

client.on('close', function () {
    console.log('Connection closed');
});
