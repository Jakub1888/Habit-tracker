import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ButtonModule } from 'src/app/shared/components/button';
import { FormFieldModule } from 'src/app/shared/components/forms/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
	declarations: [AuthComponent],
	imports: [CommonModule, ButtonModule, FormFieldModule, ReactiveFormsModule, RouterModule.forChild(routes)],
	exports: [AuthComponent]
})
export class AuthModule {}
