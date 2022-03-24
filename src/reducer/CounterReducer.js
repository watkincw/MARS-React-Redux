const counterReducer = (data = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return data + 1;
        case 'DECREMENT':
            return data - 1;
        default:
            return data;
    }
}

export default counterReducer;
