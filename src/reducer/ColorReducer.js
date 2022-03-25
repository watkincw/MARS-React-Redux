const initialState = {
    color: []
}

const ColorReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'ADD_COLOR':
            console.log('Before Change: ', newState.color);
            newState.color.push(action.payload);
            break;
        case 'REMOVE_COLOR':
            console.log('Before Change: ', newState.color);
            // for (let i = 0; i < newState.color.length; i++) {
            //     if (newState.color === action.payload) {
            //         newState.color.splice(i, 1);
            //     }
            // }
            newState.color = newState.color.filter(color => color !== action.payload);
            break;
        default:
            return newState;
        };
            
    console.log('State has changed to: ', newState.color);
    return newState;
}

export default ColorReducer;

// 1) Take an array of colors as your (initial)State
// 2) Add values to the array when you check the checkbox
// 3) Use '.filter' method to remove values when the checkbox is unchecked