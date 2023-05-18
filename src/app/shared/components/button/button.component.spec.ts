import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('ButtonComponent', () => {
	let spectator: Spectator<ButtonComponent>;
	const createComponent = createComponentFactory({
		component: ButtonComponent,
		imports: [MatButtonModule, MatIconModule, BrowserAnimationsModule]
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should have the specified label text', () => {
		const labelText = 'Submit';
		spectator.setInput('label', labelText);

		expect(spectator.query('button')).toHaveText(labelText);
	});

	it('should have the specified mat button type', () => {
		const matBtnType = 'mat-stroked-button';
		spectator.setInput('matBtnType', matBtnType);

		expect(spectator.query('button')).toHaveClass(matBtnType);
	});

	it('should be disabled if the disabled property is true', () => {
		spectator.setInput('disabled', true);

		expect(spectator.query('button')).toBeDisabled();
	});

	it('should not be disabled if the disabled property is false', () => {
		spectator.setInput('disabled', false);

		expect(spectator.query('button')).not.toBeDisabled();
	});

	it('should apply the specified btnColor class to the button', () => {
		const btnColor = 'warn';
		const expectedClassName = `mat-${btnColor}`;

		spectator.setInput('color', btnColor);

		expect(spectator.query('button')).toHaveClass(expectedClassName);
	});

	it('should emit buttonClicked event when button is clicked', () => {
		const buttonClickedSpy = jest.spyOn(spectator.component.buttonClicked, 'emit');
		spectator.component.onButtonClicked();

		expect(buttonClickedSpy).toHaveBeenCalled();
	});
});
