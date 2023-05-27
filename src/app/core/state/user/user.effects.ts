import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FirebaseError } from 'firebase/app';

@Injectable()
export class UserEffects {
	registerWithEmailAndPassword$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.registerWithEmailAndPassword),
			switchMap(({ email, password, username }) =>
				this.authService.registerWithEmailAndPassword(email, password, username).pipe(
					map(() => UserActions.registerWithEmailAndPasswordSuccess({ user: null })),
					catchError((error) =>
						of(
							UserActions.registerWithEmailAndPasswordFailure({
								error: { message: error.message, code: error.code }
							})
						)
					)
				)
			)
		)
	);

	registerWithEmailAndPasswordFailure$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(UserActions.registerWithEmailAndPasswordFailure),
				tap((error) => {
					this.toastr.error(error.error.code, error.error.message);
				})
			),
		{ dispatch: false }
	);

	registerWithEmailAndPasswordSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(UserActions.registerWithEmailAndPasswordSuccess),
				tap(() => {
					this.toastr.success('You have been successfully registered');
				})
			),
		{ dispatch: false }
	);

	constructor(private actions$: Actions, private authService: AuthService, private toastr: ToastrService) {}
}
