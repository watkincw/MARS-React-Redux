export const myLogger2 = store => next => action => {
    console.log('Second middleware Ran...');
    next(action);
}