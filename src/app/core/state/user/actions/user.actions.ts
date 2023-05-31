import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

// Register
export const registerWithEmailAndPassword = createAction(
	'[Auth Form] Register with Email and Password',
	props<{ email: string; password: string; username: string }>()
);

export const registerWithEmailAndPasswordSuccess = createAction(
	'[Auth Form] Register with Email and Password Success',
	props<{ user: User | null }>()
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
);

export const loginWithEmailAndPasswordFailure = createAction(
	'[Auth Form] Login with Email and Password Failure',
	props<{ error: any }>()
);

// Logout
export const logoutUser = createAction(
	'[Navbar] Logout User',
);

export const logoutUserSuccess = createAction(
	'[Navbar] Logout User Success',
);

export const logoutUserFailure = createAction(
	'[Navbar] Logout User Failure',
	props<{ error: any }>()
);

export const setUser = createAction(
	'[App Component] Set User',
	props<{ user: User }>()
)