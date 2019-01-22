import io from 'socket.io-client';
import {WEBSOCKET_URL} from "../config/config";

export function initSocket() {
    const socket = io(WEBSOCKET_URL);

    socket.on("connect", () => {
        console.log("Socket connected.");
    });
    socket.on("disconnect", () => {
        console.log("Socket disconnect");
    });

    socket.connect();

    return socket;
}


