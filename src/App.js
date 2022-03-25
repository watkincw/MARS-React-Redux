import './App.css';
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

// import { increment, decrement } from './action/CounterAction';


function App(props) {
	// const counter = useSelector(state => state);
	// const dispatch = useDispatch();

	const dispatch = useDispatch();
	const colorVal = useSelector(state => state.color);

	useEffect(() => {
		console.log(props);
	});

	const handleChange = (e) => {
		// 'CHANGE_COLOR' - Maybe, change 'CHANGE_COLOR' to 'ADD_COLOR'
		dispatch({
			type: 'CHANGE_COLOR',
			payload: e.target.value
		});
		// // 'REMOVE_COLOR'
		// dispatch({
		// 	type: 'REMOVE_COLOR',
		// 	payload: e.target.value
		// });
	}


	return (
		<div className="App">
			{/* <h1>Counter: {counter}</h1> */}
			{/* <button onClick={() => dispatch(increment())}>increment</button> <br /> */}
			{/* <button onClick={() => dispatch(decrement())}>decrement</button> <br /> */}

			<h1>Color: {colorVal}</h1>
			{/* checkbox version */}
			{/* <input type='checkbox' name='color' value='Red' onClick={handleChange} />Red */}
			{/* <input type='checkbox' name='color' value='Blue' onClick={handleChange} />Blue */}
			{/* radio version */}
			<input type='radio' name='color' value='Red' onClick={handleChange} />Red
			<input type='radio' name='color' value='Blue' onClick={handleChange} />Blue
			<input type='radio' name='color' value='Green' onClick={handleChange} />Green
			<input type='radio' name='color' value='Purple' onClick={handleChange} />Purple
		</div>
	);
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
