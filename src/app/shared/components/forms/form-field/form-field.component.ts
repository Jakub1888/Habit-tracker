import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
	selector: 'app-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
	@Input() control!: FormControl;
	@Input() isTextArea = false;
	@Input() type = 'text';
	@Input() label = '';
	@Input() placeholder = '';
	@Input() requiredErrorMessage = '';
	@Input() patternErrorMessage = '';
	@Input() className = 'form-input';
	@Input() icon!: string;

	get isInvalid(): boolean {
		return this.control.invalid && (this.control.dirty || this.control.touched);
	}

	get validationErrors(): ValidationErrors | null {
		return this.control.errors;
	}
}
