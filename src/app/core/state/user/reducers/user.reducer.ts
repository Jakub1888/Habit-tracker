import * as UserState from '../state/user.state';
import * as UserActions from '../actions/user.actions';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
	UserState.initialUserState,
	on(
		UserActions.registerWithEmailAndPassword,
		UserActions.loginWithEmailAndPassword,
		UserActions.logoutUser,
		(state) => ({
			...state,
			loading: true,
			error: null
		})
	),
	on(UserActions.setUser, (state, { user }) => ({
		...state,
		user: user,
		loading: false,
		error: null
	})),
	on(
		UserActions.registerWithEmailAndPasswordFailure,
		UserActions.loginWithEmailAndPasswordFailure,
		UserActions.logoutUserFailure,
		(state, { error }) => ({
			...state,
			loading: false,
			error
		})
	),
	on(UserActions.logoutUserSuccess, (state) => ({ ...state, user: null, loading: false, error: null }))
);
