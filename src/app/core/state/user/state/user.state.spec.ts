import { UserState, initialUserState } from './user.state';

describe('User state', () => {
	let userState: UserState;

	beforeEach(() => {
		userState = { ...initialUserState };
	});

	it('state should have initial values', () => {
		expect(userState).toEqual({
			user: null,
			loading: false,
			error: null
		});
	});
});
