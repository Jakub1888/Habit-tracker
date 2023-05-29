import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerWithEmailAndPassword } from '../state/user/actions/user.actions';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
	authForm!: FormGroup;

	constructor(private fb: FormBuilder, private store: Store) {
		this.initForm();
	}

	onAuthFormSubmit(): void {
		this.store.dispatch(registerWithEmailAndPassword(this.authForm.value));
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
}
