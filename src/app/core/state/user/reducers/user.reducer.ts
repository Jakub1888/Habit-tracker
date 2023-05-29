import * as UserState from '../state/user.state';
import * as UserActions from '../actions/user.actions';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
	UserState.initialUserState,
	on(UserActions.registerWithEmailAndPassword, UserActions.loginWithEmailAndPassword, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(
		UserActions.registerWithEmailAndPasswordSuccess,
		UserActions.loginWithEmailAndPasswordSuccess,
		(state, { user }) => ({
			...state,
			user: user,
			loading: false,
			error: null
		})
	),
	on(
		UserActions.registerWithEmailAndPasswordFailure,
		UserActions.loginWithEmailAndPasswordFailure,
		(state, { error }) => ({
			...state,
			loading: false,
			error
		})
	)
);
