import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class UserEffects {
	registerWithEmailAndPassword$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.registerWithEmailAndPassword),
			switchMap(({ email, password, username }) =>
				this.authService.registerWithEmailAndPassword(email, password, username).pipe(
					map(() => UserActions.registerWithEmailAndPasswordSuccess({ user: null })),
					catchError((error) => of(UserActions.registerWithEmailAndPasswordFailure({ error })))
				)
			)
		)
	);

	constructor(private actions$: Actions, private authService: AuthService) {}
}
