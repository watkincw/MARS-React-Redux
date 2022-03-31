import { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import User from './components/User';
import './App.css';
// import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { increment, decrement } from './action/CounterAction';


function App(props) {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((val) => ++val);
	}

	const decrement = () => {
		setCounter((val) => --val);
	}


	return (
		<div className='App'>
			<h1 data-testid='counter'>{counter}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</div>
	)
	// window.fetch = jest.fn(() => {
	// 	const user = {
	// 		name: 'Jack',
	// 		email: 'jack@abc.com'
	// 	};
	// 	// return Promise.resolve(user);
	// 	return Promise.resolve({
	// 		json: () => Promise.resolve(user),
	// 	})
	// });
	// // // const counter = useSelector(state => state);
	// // // const dispatch = useDispatch();

	// // const dispatch = useDispatch();
	// // const colorVal = useSelector(state => state.color);
	// // // console.log(state.color);

	// // // useEffect(() => {
	// // // 	console.log(props);
	// // // });

	// // // // This was here to help understand why the page was not being updated on select of new colors
	// // // console.log('Outside of handle change: ', colorVal);

	// // const handleChange = (e) => {
	// // 	if (e.target.checked) {
	// // 		// 'ADD_COLOR'
	// // 		dispatch({
	// // 			type: 'ADD_COLOR',
	// // 			payload: e.target.value
	// // 		})
	// // 	} else {
	// // 		// 'REMOVE_COLOR'
	// // 		dispatch({
	// // 			type: 'REMOVE_COLOR',
	// // 			payload: e.target.value
	// // 		})
	// // 	};
	// // }

	// const [ user, setUser ] = useState(null);
	// const [error, setError] = useState('');

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users/1')
	// 		.then((response) => response.json())
	// 		.then((user) => setUser(user))
	// 		.catch((error) => setError(error.message));
	// },[]);

	// if (error) {
	// 	return <span>{error}</span>
	// }

	// return (
	// 	<div className="App">
	// 		{user ? <User user={user} /> : <span>Loading...</span>}

	// 		{/* Test 1 */}
	// 		<h1>Hello world from React!</h1>
	// 		<ul className='animals'>
	// 			<li>Emu</li>
	// 			<li>Dingo</li>
	// 			<li>Kangaroo</li>
	// 			<li>Kuala</li>
	// 		</ul>

	// 		{/* <h1>Counter: {counter}</h1> */}
	// 		{/* <button onClick={() => dispatch(increment())}>increment</button> <br /> */}
	// 		{/* <button onClick={() => dispatch(decrement())}>decrement</button> <br /> */}

	// 		{/* <h1>Color(s): {colorVal}</h1> */}
	// 		{/* checkbox version */}
	// 		{/* <input type='checkbox' name='color' value='Red' onClick={handleChange} />Red */}
	// 		{/* <input type='checkbox' name='color' value='Blue' onClick={handleChange} />Blue */}
	// 		{/* <input type='checkbox' name='color' value='Green' onClick={handleChange} />Green */}
	// 		{/* <input type='checkbox' name='color' value='Purple' onClick={handleChange} />Purple */}
	// 		{/* <br /> */}
	// 		{/* <h3>Watch the console as you adjust checkbox states. The colors do not display properly, but the console displays the data correctly.</h3> */}
	// 		{/* radio version */}
	// 		{/* <input type='radio' name='color' value='Red' onClick={handleChange} />Red */}
	// 		{/* <input type='radio' name='color' value='Blue' onClick={handleChange} />Blue */}
	// 		{/* <input type='radio' name='color' value='Green' onClick={handleChange} />Green */}
	// 		{/* <input type='radio' name='color' value='Purple' onClick={handleChange} />Purple */}
	// 	</div>
	// );
}

// // 'mapStateToProps' will subscribe to redux store changes
// // Anytime the store is updated, this will be called
// const mapStateToProps = state => {
// 	return {
// 		data: state
// 	};
// }

// // 'mapDispatchToProps' is used to dispatch action(s) to the store
// const mapDispatchToProps = dispatch => {
// 	return {
// 		changeColor: (color) => dispatch({
// 			type: 'CHANGE_COLOR',
// 			payload: color
// 		})
// 	};
// }

// // 'connect' connects a react component to a redux store
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
