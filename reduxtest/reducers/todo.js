const initialState = {
    data: []
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {};
        case "DELETE_TODO":
            return {};
        default:
            return { state }
    }

}
export default Todos