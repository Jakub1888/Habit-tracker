import { createAction, props } from '@ngrx/store';
import { User } from '../state/user.state';

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
