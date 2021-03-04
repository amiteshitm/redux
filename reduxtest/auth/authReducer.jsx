import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILER } from './authType'

const initialState = {
    isLoggedIn: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state
            }
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: action.payload
            }
        case LOGIN_FAILER:
            return {
                isLoggedIn: action.payload
            }
        default:
            return state
    }
}

export default reducer