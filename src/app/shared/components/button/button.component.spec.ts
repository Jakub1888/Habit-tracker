import { ButtonComponent } from './button.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ButtonComponent', () => {
	let spectator: Spectator<ButtonComponent>;
	const createComponent = createComponentFactory(ButtonComponent);

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should emit buttonClicked event when button is clicked', () => {
		const buttonClickedSpy = spyOn(spectator.component.buttonClicked, 'emit');
		spectator.component.onButtonClicked();

		expect(buttonClickedSpy).toHaveBeenCalled();
	});
});
