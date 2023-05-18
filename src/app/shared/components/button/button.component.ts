import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

type matBtnType =
	| 'mat-mdc-raised-button'
	| 'mat-stroked-button'
	| 'mat-flat-button'
	| 'mat-icon-button';

type btnType = 'submit' | 'button';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() label = '';
	@Input() matBtnType!: matBtnType;
	@Input() btnType: btnType = 'button';
	@Input() color: ThemePalette;
	@Input() disabled = false;
	@Input() customClass = '';
	@Output() buttonClicked: EventEmitter<any> = new EventEmitter();

	onButtonClicked(): void {
		this.buttonClicked.emit(null);
	}
}
