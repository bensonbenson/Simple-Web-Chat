export default function reducer(state = {
    messages: []
}, action) {
    switch (action.type) {
        case "UPDATE_CHAT": {
            return {
                ...state,
                messages: [...state.messages, action.payload.contents]
            }
        }
        case "INITIALIZE_CHAT": {
            return {
                ...state,
                messages: action.payload
            }
        }
    }
    return state;
}