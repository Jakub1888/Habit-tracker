import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ButtonModule } from 'src/app/shared/components/button';
import { FormFieldModule } from 'src/app/shared/components/forms/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AuthComponent],
	imports: [CommonModule, ButtonModule, FormFieldModule, ReactiveFormsModule],
	exports: [AuthComponent]
})
export class AuthModule {}
