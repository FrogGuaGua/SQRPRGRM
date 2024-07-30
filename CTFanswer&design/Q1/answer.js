const WebSocket = require("ws");


let ws = new WebSocket.WebSocket("ws://10.0.0.109:5555")
ws.on("open", () => {
    console.log("start")
    ws.send(JSON.stringify({try:"486163656b343072457173"}))
});

ws.on("message", (data) => {
    console.log(JSON.parse(data))
});

ws.on("close", () => {
    console.log("closed")
});

ws.on("error", (error) => {
    console.log("error")
});
