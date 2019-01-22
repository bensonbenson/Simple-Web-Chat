import {initChat, updateChat} from "../actions/chatActions";

export function initListeners(socket, store) {
    socket.on("message", (payload) => store.dispatch(updateChat(payload)));
     socket.on("messages", (payload) => store.dispatch(initChat(payload)));
}
