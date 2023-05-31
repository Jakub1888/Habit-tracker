import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { of } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

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

	loginWithEmailAndPassword$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.loginWithEmailAndPassword),
			switchMap(({ email, password }) =>
				this.authService.loginWithEmailAndPassword(email, password).pipe(
					map((appUser) => UserActions.loginWithEmailAndPasswordSuccess()),
					catchError((error) =>
						of(
							UserActions.loginWithEmailAndPasswordFailure({
								error: { message: error.message, code: error.code }
							})
						)
					)
				)
			)
		)
	);

	logoutUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(UserActions.logoutUser),
			switchMap(() =>
				this.authService.logoutUser().pipe(
					map(() => UserActions.logoutUserSuccess()),
					catchError((error) =>
						of(
							UserActions.logoutUserFailure({
								error: { message: error.message, code: error.code }
							})
						)
					)
				)
			)
		)
	);

	handleAuthActionSuccess$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(
					UserActions.registerWithEmailAndPasswordSuccess.type,
					UserActions.loginWithEmailAndPasswordSuccess.type,
					UserActions.logoutUserSuccess
				),
				tap((action: Action) => {
					let actionMessage = this.getSuccessActionMessage(action);
					const successMessage = `You have been ${actionMessage} successfully`;
					this.toastr.success(successMessage);
					this.router.navigateByUrl('/home');
				})
			),
		{ dispatch: false }
	);

	handleAuthActionFailure$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(UserActions.registerWithEmailAndPasswordFailure, UserActions.loginWithEmailAndPasswordFailure),
				tap((error) => {
					this.toastr.error(error.error.code, error.error.message);
				})
			),
		{ dispatch: false }
	);

	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private toastr: ToastrService,
		private router: Router
	) {}

	private getSuccessActionMessage(action: Action): string {
		let message;
		switch (action.type) {
			case UserActions.registerWithEmailAndPasswordSuccess.type:
				message = 'registered';
				break;
			case UserActions.loginWithEmailAndPasswordSuccess.type:
				message = 'logged in';
				break;
			case UserActions.logoutUserSuccess.type:
				message = 'logged out';
				break;
			default:
				message = '';
		}
		return message;
	}
}
