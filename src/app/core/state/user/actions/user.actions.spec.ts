import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

import * as UserActions from './user.actions';
import { mockUser } from '../mockUser';


describe('User Actions', () => {
	// Test cases for registerWithEmailAndPassword action
	describe('registerWithEmailAndPassword', () => {
		it('should create an register action with the provided payload', () => {
			const payload = { email: 'test@example.com', password: 'password', username: 'testuser' };
			const action = UserActions.registerWithEmailAndPassword(payload);

			expect({ ...action }).toEqual({
				type: UserActions.registerWithEmailAndPassword.type,
				...payload
			});
		});
	});

	describe('registerWithEmailAndPasswordSuccess', () => {
		it('should create an success register action with the provided user', () => {
			const user: any = mockUser;
			const action = UserActions.registerWithEmailAndPasswordSuccess(user);

			expect({ ...action }).toEqual({
				type: UserActions.registerWithEmailAndPasswordSuccess.type,
				...user
			});
		});
	});

	describe('registerWithEmailAndPasswordFailure', () => {
		it('should create an failure register action with the provided error', () => {
			const error: any = { code: 500, message: 'Something went wrong' };
			const action = UserActions.registerWithEmailAndPasswordFailure(error);

			expect({ ...action }).toEqual({
				type: UserActions.registerWithEmailAndPasswordFailure.type,
				...error
			});
		});
	});

	describe('loginWithEmailAndPassword', () => {
		it('should create an login action with the provided payload', () => {
			const payload = { email: 'test@example.com', password: 'password' };
			const action = UserActions.loginWithEmailAndPassword(payload);

			expect({ ...action }).toEqual({
				type: UserActions.loginWithEmailAndPassword.type,
				...payload
			});
		});
	});

	describe('loginWithEmailAndPasswordSuccess', () => {
		it('should create an success login action', () => {
			const action = UserActions.loginWithEmailAndPasswordSuccess();

			expect({ ...action }).toEqual({
				type: UserActions.loginWithEmailAndPasswordSuccess.type
			});
		});
	});

	describe('loginWithEmailAndPasswordFailure', () => {
		it('should create an failure login action with the provided error', () => {
			const error: any = { code: 400, message: 'User does not exist' };
			const action = UserActions.loginWithEmailAndPasswordFailure(error);

			expect({ ...action }).toEqual({
				type: UserActions.loginWithEmailAndPasswordFailure.type,
				...error
			});
		});
	});

	describe('logoutUSer', () => {
		it('should create an logout action', () => {
			const action = UserActions.logoutUser();

			expect({ ...action }).toEqual({
				type: UserActions.logoutUser.type
			});
		});
	});

	describe('logoutUSer', () => {
		it('should create an success logout action', () => {
			const action = UserActions.logoutUserSuccess();

			expect({ ...action }).toEqual({
				type: UserActions.logoutUserSuccess.type
			});
		});
	});

	describe('logoutUser', () => {
		it('should create an failure logout action', () => {
			const error: any = { code: 500, message: 'Something went wrong' };
			const action = UserActions.logoutUserFailure(error);

			expect({ ...action }).toEqual({
				type: UserActions.logoutUserFailure.type,
				...error
			});
		});
	});

	describe('setUser', () => {
		it('should create an set user action with the provided user', () => {
			const user: any = mockUser;
			const action = UserActions.setUser(user);

			expect({ ...action }).toEqual({
				type: UserActions.setUser.type,
				...user
			});
		});
	});
});
