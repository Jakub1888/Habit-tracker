import { ButtonComponent } from './button.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ButtonComponent', () => {
	let spectator: Spectator<ButtonComponent>;
	const createComponent = createComponentFactory(ButtonComponent);

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
		const expectedClassName = `mat-${btnColor}-button`;

		spectator.setInput('btnColor', btnColor);

		expect(spectator.query('button')).toHaveClass(expectedClassName);
	});
});
