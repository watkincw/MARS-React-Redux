const initialState = {
    color: 'White'
}

const ColorReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'CHANGE_COLOR':
            console.log('State about to change from: ', newState);
            newState.color = action.payload;
            break;
        // case 'REMOVE_COLOR':
        default:
            return newState;
        };
            
    console.log('State has changed to: ', newState);
    return newState;
}

export default ColorReducer;

// 1) Take an array of colors as your (initial)State
// 2) Add values to the array when you check the checkbox
// 3) Use '.filter' method to remove values when the checkbox is unchecked