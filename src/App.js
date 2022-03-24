import './App.css';
import { useSelector } from 'react-redux';
import { increment, decrement } from './action/CounterAction';
import { useDispatch } from 'react-redux';


function App() {
	const counter = useSelector(state => state);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(increment())}>increment</button> <br />
			<button onClick={() => dispatch(decrement())}>decrement</button>
		</div>
	);
}

export default App;
