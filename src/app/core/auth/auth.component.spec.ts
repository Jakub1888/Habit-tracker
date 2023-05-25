import { AuthComponent } from './auth.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent, ButtonModule } from '../../shared/components/button';
import { ReactiveFormsModule } from '@angular/forms';

describe('AuthComponent', () => {
	let spectator: Spectator<AuthComponent>;
	const createComponent = createComponentFactory({
		component: AuthComponent,
		imports: [ButtonModule, BrowserAnimationsModule, ReactiveFormsModule],
		declarations: [ButtonComponent],
		shallow: true
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('Auth form should have value that was set to form controls', () => {
		let authForm = spectator.component.authForm;
		authForm.controls['username'].setValue('test');
		authForm.controls['password'].setValue('TestPassword1');
		spectator.component.onAuthFormSubmit();

		const authFormVal = authForm.getRawValue();
		expect(authFormVal).toEqual({ username: 'test', password: 'TestPassword1' });
	});

	it('Submit button should be disabled if the values are incorrect', () => {
		let authForm = spectator.component.authForm;
		authForm.controls['username'].setValue('');
		authForm.controls['password'].setValue('t');
		const submitButton = spectator.query(ButtonComponent);
		spectator.detectChanges();

    	expect(submitButton?.disabled).toBeTruthy();
	});

	it('Submit button should be enabled if the values are correct', () => {
		let authForm = spectator.component.authForm;
		authForm.controls['username'].setValue('test');
		authForm.controls['password'].setValue('TestPassword1');
		const submitButton = spectator.query(ButtonComponent);
		spectator.detectChanges();

    	expect(submitButton?.disabled).toBeFalsy();
	});
});
