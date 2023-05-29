import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerWithEmailAndPassword } from '../state/user/actions/user.actions';
import { Router } from '@angular/router';

type AuthMode = 'register' | 'login';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
	authForm!: FormGroup;
	authMode!: AuthMode;

	constructor(private fb: FormBuilder, private store: Store, private router: Router) {
		this.initForm();
		this.initAuthMode();
		if (this.authMode === 'login') {
			this.authForm.removeControl('username');
		}
	}

	onAuthFormSubmit(): void {
		if (this.authMode === 'login') {
			// this.store.dispatch(loginWithEmailAndPassword(this.authForm.value));
		} else {
			this.store.dispatch(registerWithEmailAndPassword(this.authForm.value));
		}
	}

	private initForm(): void {
		this.authForm = this.fb.group({
			username: new FormControl('', {
				nonNullable: true,
				validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
			}),
			email: new FormControl('', {
				nonNullable: true,
				validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
			}),
			password: new FormControl('', {
				nonNullable: true,
				validators: [Validators.required, Validators.pattern(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)]
			})
		});
	}

	private initAuthMode(): void {
		let currentRoute = this.router.url;
		currentRoute = currentRoute.substring(1);
		this.authMode = currentRoute as AuthMode;
	}
}
