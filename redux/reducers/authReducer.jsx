const authState = {
    isLoggedIn: false,
    user: {
        name: "",
        jwtToken: '',
        expires_at: '',
        authorities: []
    }
}

const authReducer = (state = authState, action) => {
    return state
}

export default authReducer