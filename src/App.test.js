import { render, screen } from '@testing-library/react';
import App from './App';

// Test 1
test('list contains 4 animals', async () => {
	render(<App />);

	const userName = await screen.findByText('Jack');

	expect(userName).toBeInTheDocument()


	// screen.debug();
	// const listElement = screen.getByRole('list');
	// const listItems = screen.getAllByRole('listitem');

	// expect(listElement).toBeInTheDocument();
	// expect(listElement).toHaveClass('animals');
	// expect(listItems.length).toEqual(4);
});
