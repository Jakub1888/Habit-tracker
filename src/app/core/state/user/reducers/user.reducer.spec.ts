import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ActionReducer, createReducer, Store, StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducer';
import * as UserState from '../state/user.state';
import * as UserActions from '../actions/user.actions';
import { mockUser } from '../mockUser';

describe('userReducer', () => {
	let reducer: ActionReducer<UserState.UserState, any>;
	const initialState: UserState.UserState = { loading: false, user: null, error: null };
	const error = { code: 500, message: 'something went wrong' };

	beforeEach(() => {
		reducer = userReducer;
	});

	describe('register and login actions', () => {
		it('should set loading to true and error, user to null on register', () => {
			const action = UserActions.registerWithEmailAndPassword({
				email: 'test@example.com',
				password: 'password',
				username: 'username'
			});

			const newState = reducer(initialState, action);
			expect(newState).toEqual({ user: null, error: null, loading: true });
		});

		it('should set loading to true and error, user to null on login', () => {
			const action = UserActions.loginWithEmailAndPassword({
				email: 'test@example.com',
				password: 'password'
			});

			const newState = reducer(initialState, action);
			expect(newState).toEqual({ user: null, error: null, loading: true });
		});

		it('should set error state on registerWithEmailAndPasswordFailure action', () => {
			let error = { code: 500, message: 'something went wrong' };
			const action = UserActions.registerWithEmailAndPasswordFailure({ error });

			const newState = reducer(initialState, action);
			expect(newState.error).not.toBeNull();
		});

		it('should set error state on loginWithEmailAndPasswordFailure action', () => {
			let error = { code: 500, message: 'something went wrong' };
			const action = UserActions.loginWithEmailAndPasswordFailure({ error });

			const newState = reducer(initialState, action);
			expect(newState.error).not.toBeNull();
		});
	});

	describe('logout actions', () => {
		it('should set loading to true on logoutUser action', () => {
			const action = UserActions.logoutUser();

			const newState = reducer({ user: mockUser, loading: false, error: null }, action);
			expect(newState).toEqual({ user: mockUser, loading: true, error: null });
		});

		it('should remove user and set loading to false on logouUserSuccess', () => {
			const action = UserActions.logoutUserSuccess();

			const newState = reducer({ user: mockUser, loading: true, error: null }, action);
			expect(newState).toEqual({ user: null, loading: false, error: null });
		});

		it('should set error on logouUserFailure', () => {
			const action = UserActions.logoutUserFailure({ error });

			const newState = reducer({ user: mockUser, loading: true, error: null }, action);
			expect(newState).toEqual({ user: mockUser, loading: false, error: error });
		});
	});

	it('should set provided user value when setUser action is dispatched', () => {
		let user = mockUser;
		const action = UserActions.setUser({ user });

		const newState = reducer(initialState, action);
		expect(newState).toEqual({ user: mockUser, error: null, loading: false });
	});
});
