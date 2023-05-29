import { createAction, props } from '@ngrx/store';
import { User } from '../state/user.state';

// Register
export const registerWithEmailAndPassword = createAction(
	'[Auth Form] Register with Email and Password',
	props<{ email: string; password: string; username: string }>()
);

export const registerWithEmailAndPasswordSuccess = createAction(
	'[Auth Form] Register with Email and Password Success',
	props<{ user: any }>()
);

export const registerWithEmailAndPasswordFailure = createAction(
	'[Auth Form] Register with Email and Password Failure',
	props<{ error: any }>()
);

// Login
export const loginWithEmailAndPassword = createAction(
	'[Auth Form] Login with Email and Password',
	props<{ email: string; password: string }>()
);

export const loginWithEmailAndPasswordSuccess = createAction(
	'[Auth Form] Login with Email and Password Success',
	props<{ user: any }>()
);

export const loginWithEmailAndPasswordFailure = createAction(
	'[Auth Form] Login with Email and Password Failure',
	props<{ error: any }>()
);
