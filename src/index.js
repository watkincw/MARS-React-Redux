import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
// import counterReducer from './reducer/CounterReducer';
import ColorReducer from './reducer/ColorReducer';
// import postReducer from './reducer/PostReducer';
import { Provider } from 'react-redux';
// import Posts from './components/Posts';
// import logger from 'redux-logger';
import { myLogger } from './middleware/myLogger';
import { myLogger2 } from './middleware/myLogger2';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';

const devTools = composeWithDevTools(applyMiddleware(myLogger, myLogger2));
const store = createStore(ColorReducer, devTools);
// const store = createStore(postReducer, applyMiddleware(thunk));
console.log('Store Created!');

ReactDOM.render(
	<Provider store={store}>
		{/* <Posts /> */}
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
