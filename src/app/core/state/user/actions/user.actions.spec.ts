import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

import * as UserActions from './user.actions';

describe('User Actions', () => {
	// Test cases for registerWithEmailAndPassword action
	describe('registerWithEmailAndPassword', () => {
	  it('should create an action with the provided payload', () => {
		const payload = { email: 'test@example.com', password: 'password', username: 'testuser' };
		const action = UserActions.registerWithEmailAndPassword(payload);
  
		expect(action.type).toBe('[Auth Form] Register with Email and Password');
		expect(action.email).toBe(payload.email);
		expect(action.password).toBe(payload.password);
		expect(action.username).toBe(payload.username);
	  });
	});
  
	describe('registerWithEmailAndPasswordSuccess', () => {
	  it('should create an action with the provided user', () => {
		// // const user: User | null = { /* Mock user object */ };
		// const action = registerWithEmailAndPasswordSuccess({ user });
  
		// expect(action.type).toBe('[Auth Form] Register with Email and Password Success');
		// expect(action.user).toBe(user);
	  });
	});
  
	// Add test cases for the other actions
  
	// ...
  });