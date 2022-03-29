const initialState = [];
const PostReducer = (state = initialState, action) => {
    state = action.payload;
    return state;
}

export default PostReducer;