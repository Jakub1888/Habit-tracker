import { mockUser } from '../mockUser';
import { UserState } from '../state/user.state';
import * as UserSelectors from './user.selectors';

describe('User Selectors', () => {
	const initialState: UserState = {
		user: null,
		loading: false,
		error: null
	};

	it('should select the user from the user state', () => {
		const user = mockUser;
		const state: UserState = { ...initialState, user };
		const selectedUser = UserSelectors.selectUser.projector(state);

		expect(selectedUser).toBe(user);
	});

	it('should select isAuthenticated if the user is set', () => {
		const user = mockUser;
		const isAuthenticated = UserSelectors.selectIsAuthenticated.projector(user);

		expect(isAuthenticated).toBe(true);
	});

	it('should select loading state as true if the loading is set to true', () => {
		const state: UserState = { ...initialState, loading: true };
		const isLoading = UserSelectors.selectLoading.projector(state);

		expect(isLoading).toBe(true);
	});

	it('should select loading state as false if the loading is set to false', () => {
		const state: UserState = { ...initialState, loading: false };
		const isLoading = UserSelectors.selectLoading.projector(state);

		expect(isLoading).not.toBe(true);
	});

	it('should select loading state as false if the loading is set to false', () => {
		const error = { code: 500, message: 'Something went wrong' };
		const state: UserState = { ...initialState, error: error };
		const selectedError = UserSelectors.selectError.projector(state);

		expect(selectedError).toEqual(error);
	});
});
