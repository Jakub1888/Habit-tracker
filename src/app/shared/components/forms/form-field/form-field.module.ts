import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [FormFieldComponent],
	imports: [CommonModule, MatInputModule, ReactiveFormsModule],
	exports: [FormFieldComponent]
})
export class FormFieldModule {}
