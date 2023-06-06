import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Spectator, SpectatorHttp, SpectatorService, createHttpFactory, createServiceFactory } from '@ngneat/spectator';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserEffects } from './user.effects';

describe('UserEffets', () => {
	let spectator: SpectatorService<UserEffects>;

	const createService = createServiceFactory(UserEffects);

	beforeEach(() => {
		spectator = createService();
	});
});
