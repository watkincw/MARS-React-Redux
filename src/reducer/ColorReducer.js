const initialState = {
    color: null
}

const ColorReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'CHANGE_COLOR':
            newState.color = action.payload;
            break;
        default:
            return newState;
    };

    return newState;
}

export default ColorReducer;