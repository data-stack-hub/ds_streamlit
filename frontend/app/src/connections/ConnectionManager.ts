import { WebsocketConnection } from "./WebsocketConnection";

export class ConnectionManager {
    private readonly props
    private connection
    constructor(props) {
        this.props = props
        this.connect()
    }

    private async connect() {
        this.connection = new WebsocketConnection(this.props)
    }

    disconnect() {

    }

    public sendMessage(msg) {
        this.connection.sendMessage(msg)
    }

}