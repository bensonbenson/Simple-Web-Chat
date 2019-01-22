export function updateChat(message) {
    return {
        type: "UPDATE_CHAT",
        payload: message
    }
}

export function initChat (messages) {
    return {
        type: "INITIALIZE_CHAT",
        payload: messages
    }
}