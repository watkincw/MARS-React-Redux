import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import UserEvent from '@testing-library/user-event';

describe('Testing increment and decrement duttons...', () => {
	test('Counter increment onClick...', async () => {
		render(<App />);
		const counter = screen.getByTestId('counter');
		const incrementBtn = screen.getByText('increment');
	
		UserEvent.click(incrementBtn);
		UserEvent.click(incrementBtn);
	
		expect(counter.textContent).toEqual('2');
	});
	
	test('Counter decrememnt onClick...', async () => {
		render(<App />);
		const counter = screen.getByTestId('counter');
		const decrementBtn = screen.getByText('decrement');
	
		UserEvent.click(decrementBtn);
		UserEvent.click(decrementBtn);
	
		expect(counter.textContent).toEqual('-2');
	});
});

// describe('Testing App component', () => {
// 	// Test 1
// 	test('list contains 4 animals', async () => {
// 		render(<App />);
	
// 		const userName = await screen.findByText('Jack');
	
// 		expect(userName).toBeInTheDocument()
	
	
// 		// screen.debug();
// 		// const listElement = screen.getByRole('list');
// 		// const listItems = screen.getAllByRole('listitem');
	
// 		// expect(listElement).toBeInTheDocument();
// 		// expect(listElement).toHaveClass('animals');
// 		// expect(listItems.length).toEqual(4);
// 	});
	
// 	// Test 2
// 	test('Loading text appearing...', async () => {
// 		render(<App />);
// 		const loadingText = screen.getByText('Loading...');
// 		expect(loadingText).toBeInTheDocument();
// 		await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
// 	});
// });