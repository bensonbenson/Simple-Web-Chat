export default function reducer (state = {
    user: {
        id: null,
        userName: null
    },
    error: null
}, action) {
    switch (action.type) {

        case "SET_USER_NAME": {
            return {
                ...state,
                user: {...state.user, name: action.payload}
            }
        }
    }
    return state;
}
