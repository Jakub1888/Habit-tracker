import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('ButtonComponent', () => {
	let spectator: Spectator<ButtonComponent>;
	const createComponent = createComponentFactory({
		component: ButtonComponent,
		imports: [
			MatButtonModule, // Add MatButtonModule
			MatIconModule, // Add MatIconModule
			BrowserAnimationsModule // Add BrowserAnimationsModule
		]
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should emit buttonClicked event when button is clicked', () => {
		const buttonClickedSpy = jest.spyOn(spectator.component.buttonClicked, 'emit');
		spectator.component.onButtonClicked();

		expect(buttonClickedSpy).toHaveBeenCalled();
	});

	it('should apply the specified btnColor class to the button', () => {
		const btnColor = 'warn';
		const expectedClassName = `mat-${btnColor}`;

		spectator.setInput('color', btnColor);

		expect(spectator.query('button')).toHaveClass(expectedClassName);
	});
});
