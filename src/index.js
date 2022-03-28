import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
// import counterReducer from './reducer/CounterReducer';
import ColorReducer from './reducer/ColorReducer';
import { Provider } from 'react-redux';
import { myLogger } from './middleware/myLogger';
import { myLogger2 } from './middleware/myLogger2';
import reportWebVitals from './reportWebVitals';

const store = createStore(ColorReducer, applyMiddleware(myLogger, myLogger2));
console.log('Store Created!');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
