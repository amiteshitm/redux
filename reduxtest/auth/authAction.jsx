import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILER } from './authType'


export const authenticateUser = (userName, password) => {
    return dispatch => {
        dispatch(LoginRequest());
        if (userName === 'test', password === '123') {
            dispatch(LoginSuccess())
        } else {
            dispatch(LoginFailer())
        }
    }
}

const LoginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}


const LoginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: true
    }
}

const LoginFailer = () => {
    return {
        type: LOGIN_FAILER,
        payload: false
    }
}
