import * as UserState from './user.state';
import * as UserActions from './user.actions';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
	UserState.initialUserState,
	on(UserActions.registerWithEmailAndPassword, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(UserActions.registerWithEmailAndPasswordSuccess, (state, { user }) => ({
		...state,
		user,
		loading: false,
		error: null
	})),
	on(UserActions.registerWithEmailAndPasswordFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	}))
);
