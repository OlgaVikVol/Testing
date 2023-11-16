import { render, screen} from '@testing-library/react';
import Users from "./Users";
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { MemoryRouter} from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../test/helpers/renderWithRouter';


jest.mock('axios');

describe( "User TEST", () => {
	let response;
	beforeEach(() => {
		response = {
			data: [
				{
					"id": 1,
					"name": "Leanne Graham",
				},
				{
					"id": 2,
					"name": "Ervin Howell",
				},
				{
					"id": 3,
					"name": "Clementine Bauch",
				}
			]
		}
	})

	afterEach(() => {
		jest.clearAllMocks();
	})

	test('render users', async () => {
		axios.get.mockReturnValue(response);
		render(<Users />);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);
		screen.debug();
	})

	test('redirect to details page', async () => {
		axios.get.mockReturnValue(response);
		render(renderWithRouter(null, '/users'));
		const users = await screen.findAllByTestId('user-item');
		userEvent.click(users[0])
		expect(screen.getByTestId('user-page')).toBeInTheDocument();
	})
})
