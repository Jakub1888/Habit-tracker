import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

import * as UserActions from './user.actions';

const mockUser: any = {
	uid: 'PrKOKblC7NPxGC8Mwg1čaqFi8nT3',
	email: 'testxd@test.com',
	emailVerified: false,
	isAnonymous: false,
	providerData: [
		{
			providerId: 'password',
			uid: 'testxd@test.com',
			displayName: null,
			email: 'testxd@test.com',
			phoneNumber: null,
			photoURL: null
		}
	],
	stsTokenManager: {
		refreshToken:
			'APZUo0Rd95m_zwB6_xLU5VlO3SogavcEsKh6tseXvNJEMp9GWcfUGea_7mEqFXLQYRad-BPTv0C66QKk0dKJ-LsSrgvIA_nQzBP1SJr2y9grM0qrGso-9beQcnXqxwldoBKp9DrkPM2NYDgf36OexHuFD0KGtimCrmQw3Kl8QqYEOcgNgz1I8A2dqSq3yGdRuSBT1MaBGAXNIGLh9BUhFXDNVW5aOfnb-A',
		accessToken:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkM2E0YTllYjY0OTk0YzUxMxYyYzhlMGMwMTY3MzEzN2U5NTg3Y2EiLCJ0eXAiOiJKV1Q3fQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGFiaXQtdHJhY2tlci1qayIsImF1ZCI6ImhhYml0LXRyYWNrZXItamsiLCJhdXRoX3RpbWUiOjE2ODU3OTg3OTEsInVzZXJfaWQiOiJKckt2S2J0QzdOUHhHQzhNd2IxYWFxRmg4blQyIiwic3ViIjoiSnJLdktidEM3TlB4R0M4TXdiMWFhcUZoOG5UMiIsImlhdCI6MTY4NTc5ODc5MSwiZXhwIjoxNjg1ODAyMzkxLCJlbWFpbCI6InRlc3QyQHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QyQHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQiaX0.qjL3O8qUKZGQvqMkdD1tWqhypVuLAZOczASidAMwjulA_NGDv4RJRVNUOlb8nVipEWD9DULUEUilvOAtgJ8z1zWaYAcRTu4bFelaekrW58lm82Ey1-ABcNRuNPEPSU7UIjCrF5eftfhjogRjYDFr-rdNm_v-WNFSpoLZxkL8glud4kf0QGOYcjUum6ePnNLn3D8DFhUq4aN-TzaAHYipMX4Gcp8rdCm34km9HtjNr8-BaeWLrmnmxP14j__W7L97sT68ZuasLmXRASO49LZTIMBa2nOa6ptQ2xp9ZgSTKDgRQcDqg5mO0XvNWF2cUElHiiKxoRT58Uwf7dbU4znWTQ',
		expirationTime: 1685802389924
	},
	createdAt: '1685356631308',
	lastLoginAt: '1685798791260',
	apiKey: 'CIzaSyBLoQpb0o12nUgVabDl4BGHL39kMCpS_rp',
	appName: '[DEFAULT]'
};

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
