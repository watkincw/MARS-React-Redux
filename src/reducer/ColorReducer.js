const initialState = {
    color: []
}

// All commented lines are for old way of achieving the result.
// The old way would not display selected colors on select, ONLY on unselect.
// The new way returns the new data explicitly, so it updates what is displayed on the page.
// This is what my understanding is at this moment; it may be an incorrect understanding...
const ColorReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'ADD_COLOR':
            // console.log('Before Change: ', newState.color);
            // newState.color.push(action.payload);
            return {
                newState,
                color: [newState.color, action.payload]
            }
            // break;
        case 'REMOVE_COLOR':
            // console.log('Before Change: ', newState.color);
            // // for (let i = 0; i < newState.color.length; i++) {
            // //     if (newState.color === action.payload) {
            // //         newState.color.splice(i, 1);
            // //     }
            // // }
            // newState.color = newState.color.filter(color => color !== action.payload);
            let val = newState.color.flat(2);
            return {
                newState,
                color: [val.filter(value => value !== action.payload)]
            }
            // break;
        default:
            return newState;
        };
            
    // console.log('State has changed to: ', newState.color);
    // return newState;
}

export default ColorReducer;

// 1) Take an array of colors as your (initial)State
// 2) Add values to the array when you check the checkbox
// 3) Use '.filter' method to remove values when the checkbox is unchecked