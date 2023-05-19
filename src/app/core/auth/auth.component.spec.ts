import { AuthComponent } from './auth.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '../../shared/components/button';

describe('AuthComponent', () => {
	let spectator: Spectator<AuthComponent>;
	const createComponent = createComponentFactory({
		component: AuthComponent,
		imports: [ButtonModule, BrowserAnimationsModule]
	});

	beforeEach(() => {
		spectator = createComponent();
	});

	it('should log "xd" when onAuthFormSubmit is called', () => {
		const consoleLogSpy = jest.spyOn(console, 'log');
		spectator.component.onAuthFormSubmit();

		expect(consoleLogSpy).toHaveBeenCalledWith('xd');
	});
});
