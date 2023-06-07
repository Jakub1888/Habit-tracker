import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator';
import { EMPTY, Observable, of } from 'rxjs';
import { UserEffects } from './user.effects';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

describe('UserEffets', () => {
	let spectator: SpectatorService<UserEffects>;
	let userEffects: UserEffects;
	let authService: AuthService;
	let actions$: Observable<any>;
	let store: Store<any>;

	const createService = createServiceFactory({
		service: UserEffects,
		mocks: [AuthService],
		providers: [provideMockActions(() => actions$), provideMockStore()]
	});

	beforeEach(() => {
		spectator = createService();
		userEffects = spectator.service;
		authService = spectator.inject(AuthService);
		actions$ = spectator.inject<Observable<any>>(Actions);
		store = spectator.inject(Store);
	});

	it('should dispatch registerWithEmailAndPasswordSuccess action on success', () => {
		const email = 'test@test.com';
		const password = 'password';
		const username = 'testuser';
		const action = UserActions.registerWithEmailAndPassword({ email, password, username });
		const completion = UserActions.registerWithEmailAndPasswordSuccess({ user: null });

		jest.spyOn(authService, 'registerWithEmailAndPassword').mockReturnValue(EMPTY);
		actions$ = of(action);

		userEffects.registerWithEmailAndPassword$.subscribe(() => {
			expect(store.dispatch).toHaveBeenCalledWith(completion);
		});

		expect(authService.registerWithEmailAndPassword).toHaveBeenCalledWith(email, password, username);
	});
});
