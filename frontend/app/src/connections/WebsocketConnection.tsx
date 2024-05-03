import socketIOClient from "socket.io-client";

export class WebsocketConnection {
    private readonly args
    private websocket
    constructor(props) {
        this.args = props
        console.log(this.args)
        this.connectToWebSocket()
    }

    public getBaseUriParts() {

    }

    public disconnect() {

    }

    private async connectToWebSocket() {
        console.log('connecting...')
        this.websocket = socketIOClient("http://localhost:5000");
        this.websocket.on("connect", () => {
            console.log('connected')
            this.websocket.emit('message', 'msg from react');
        });
        this.websocket.on('msg', (msg) => {
            this.handleMessage(msg)
        })
    }

    private sendMessage(msg) {
        this.websocket.emit('message', msg)
    }

    private async handleMessage(msg) {
        this.args.onMessage(msg)
    }

}